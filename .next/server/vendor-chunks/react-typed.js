"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-typed";
exports.ids = ["vendor-chunks/react-typed"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-typed/dist/mjs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-typed/dist/mjs/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReactTyped: () => (/* binding */ ReactTyped),\n/* harmony export */   Typed: () => (/* reexport safe */ typed_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ \"(ssr)/./node_modules/typed.js/dist/typed.module.js\");\n\n\nconst ReactTyped = (0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(({ style, className, typedRef, parseRef: transformRef, stopped, children, startWhenVisible, ...typedOptions }) => {\n    const rootElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const shouldUpdateArgs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [\n        ...Object.values(typedOptions).filter((v) => typeof v === \"boolean\" ||\n            typeof v === \"number\" ||\n            typeof v === \"string\"),\n        typedOptions.strings?.join(\",\"),\n    ], [typedOptions]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        const element = (transformRef && transformRef(rootElement)) || rootElement.current;\n        const typed = new typed_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element, { ...typedOptions });\n        if (stopped || startWhenVisible) {\n            typed?.stop();\n        }\n        if (startWhenVisible) {\n            const observer = new IntersectionObserver(([entry]) => {\n                if (entry.isIntersecting) {\n                    typed?.start();\n                    observer.disconnect();\n                }\n            });\n            observer.observe(element);\n        }\n        if (typedRef && typed) {\n            typedRef(typed);\n        }\n        return () => {\n            typed.destroy();\n        };\n    }, shouldUpdateArgs);\n    const child = !children ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { style: style, ref: rootElement })) : (react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, {\n        ref: rootElement,\n    }));\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { style: style, className: className, \"data-testid\": \"react-typed\" }, child));\n});\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHlwZWQvZGlzdC9tanMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRTtBQUNuQztBQUN0QixtQkFBbUIsMkNBQUksSUFBSSwwR0FBMEc7QUFDNUksd0JBQXdCLDZDQUFNO0FBQzlCLDZCQUE2Qiw4Q0FBTztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBUztBQUNiO0FBQ0EsMEJBQTBCLGdEQUFLLFlBQVksaUJBQWlCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLCtCQUErQixnREFBbUIsV0FBVyxnQ0FBZ0MsTUFBTSwrQ0FBa0I7QUFDckg7QUFDQSxLQUFLO0FBQ0wsWUFBWSxnREFBbUIsV0FBVyxrRUFBa0U7QUFDNUcsQ0FBQztBQUNnQjtBQUNqQiIsInNvdXJjZXMiOlsid2VicGFjazovL21ha2V5b3VyYWkvLi9ub2RlX21vZHVsZXMvcmVhY3QtdHlwZWQvZGlzdC9tanMvaW5kZXguanM/ZjdhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlTWVtbywgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUeXBlZCBmcm9tIFwidHlwZWQuanNcIjtcbmV4cG9ydCBjb25zdCBSZWFjdFR5cGVkID0gbWVtbygoeyBzdHlsZSwgY2xhc3NOYW1lLCB0eXBlZFJlZiwgcGFyc2VSZWY6IHRyYW5zZm9ybVJlZiwgc3RvcHBlZCwgY2hpbGRyZW4sIHN0YXJ0V2hlblZpc2libGUsIC4uLnR5cGVkT3B0aW9ucyB9KSA9PiB7XG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlQXJncyA9IHVzZU1lbW8oKCkgPT4gW1xuICAgICAgICAuLi5PYmplY3QudmFsdWVzKHR5cGVkT3B0aW9ucykuZmlsdGVyKCh2KSA9PiB0eXBlb2YgdiA9PT0gXCJib29sZWFuXCIgfHxcbiAgICAgICAgICAgIHR5cGVvZiB2ID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIiksXG4gICAgICAgIHR5cGVkT3B0aW9ucy5zdHJpbmdzPy5qb2luKFwiLFwiKSxcbiAgICBdLCBbdHlwZWRPcHRpb25zXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICh0cmFuc2Zvcm1SZWYgJiYgdHJhbnNmb3JtUmVmKHJvb3RFbGVtZW50KSkgfHwgcm9vdEVsZW1lbnQuY3VycmVudDtcbiAgICAgICAgY29uc3QgdHlwZWQgPSBuZXcgVHlwZWQoZWxlbWVudCwgeyAuLi50eXBlZE9wdGlvbnMgfSk7XG4gICAgICAgIGlmIChzdG9wcGVkIHx8IHN0YXJ0V2hlblZpc2libGUpIHtcbiAgICAgICAgICAgIHR5cGVkPy5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0V2hlblZpc2libGUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChbZW50cnldKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVkPy5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlZFJlZiAmJiB0eXBlZCkge1xuICAgICAgICAgICAgdHlwZWRSZWYodHlwZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICB0eXBlZC5kZXN0cm95KCk7XG4gICAgICAgIH07XG4gICAgfSwgc2hvdWxkVXBkYXRlQXJncyk7XG4gICAgY29uc3QgY2hpbGQgPSAhY2hpbGRyZW4gPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogc3R5bGUsIHJlZjogcm9vdEVsZW1lbnQgfSkpIDogKFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICByZWY6IHJvb3RFbGVtZW50LFxuICAgIH0pKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHN0eWxlLCBjbGFzc05hbWU6IGNsYXNzTmFtZSwgXCJkYXRhLXRlc3RpZFwiOiBcInJlYWN0LXR5cGVkXCIgfSwgY2hpbGQpKTtcbn0pO1xuZXhwb3J0IHsgVHlwZWQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-typed/dist/mjs/index.js\n");

/***/ })

};
;