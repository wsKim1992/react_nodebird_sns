webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\study\\nodebird_sns\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      /**
       * scrollY : 얼마나 내렸는지
       * clientHeight : 화면 보이는 길이
       * scrollHeight : 총 길이
       */
      console.log(window.scrollY);
      console.log(document.documentElement.clientHeight);
      console.log(document.documentElement.scrollHeight);

      if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
        if (hasMorePosts === true) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      //메모리 헤제 하기 위해.
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 18
    }, _this), mainPosts.map(function (post, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 40
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, _this);
};

_s(Home, "0eh/dVscKUwLWSbBjnaxjQCDILI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkeCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQUk7QUFBQTs7QUFDYixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUFXQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLElBQWY7QUFBQSxHQUFELENBQXRCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxzQkFBaUNILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0csSUFBZjtBQUFBLEdBQUQsQ0FBNUM7QUFBQSxNQUFPQyxTQUFQLGlCQUFPQSxTQUFQO0FBQUEsTUFBaUJDLFlBQWpCLGlCQUFpQkEsWUFBakI7O0FBRUFDLHlEQUFTLENBQUMsWUFBSTtBQUNWVCxZQUFRLENBQUM7QUFDTFUsVUFBSSxFQUFDQyxpRUFBa0JBO0FBRGxCLEtBQUQsQ0FBUjtBQUdILEdBSlEsRUFJUCxFQUpPLENBQVQ7QUFNQUYseURBQVMsQ0FBQyxZQUFJO0FBQ1YsYUFBU0csUUFBVCxHQUFtQjtBQUNmO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDWUMsYUFBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsT0FBbkI7QUFDQUgsYUFBTyxDQUFDQyxHQUFSLENBQVlHLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBckM7QUFDQU4sYUFBTyxDQUFDQyxHQUFSLENBQVlHLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBckM7O0FBQ0EsVUFBR0wsTUFBTSxDQUFDQyxPQUFQLEdBQWVDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBeEMsS0FBdURGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBbkYsRUFBZ0c7QUFDNUYsWUFBR1osWUFBWSxLQUFHLElBQWxCLEVBQXVCO0FBQ25CUixrQkFBUSxDQUFDO0FBQUNVLGdCQUFJLEVBQUNDLGlFQUFrQkE7QUFBeEIsV0FBRCxDQUFSO0FBQ0g7QUFDSjtBQUNKOztBQUNESSxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWlDVCxRQUFqQztBQUNBLFdBQU8sWUFBSTtBQUNQO0FBQ0FHLFlBQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBb0NWLFFBQXBDO0FBQ0gsS0FIRDtBQUlILEdBckJRLEVBcUJQLEVBckJPLENBQVQ7QUF1QkEsc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSxlQUNLUCxFQUFFLGlCQUFFLHFFQUFFLDREQUFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVCxFQUVLRSxTQUFTLENBQUNnQixHQUFWLENBQWMsVUFBQ2pCLElBQUQsRUFBTWtCLEdBQU47QUFBQSwwQkFBWSxxRUFBQyw0REFBRDtBQUF3QixZQUFJLEVBQUVsQjtBQUE5QixTQUFlQSxJQUFJLENBQUNtQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVo7QUFBQSxLQUFkLENBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQXhDRDs7R0FBTTFCLEk7VUFDZUUsdUQsRUFDTkMsdUQsRUFDc0JBLHVEOzs7S0FIL0JILEk7QUEwQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3YzJjZjA4ODMwZjJkMTZhMGMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdENhcmRcIjtcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RGb3JtXCI7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcblxyXG5jb25zdCBIb21lID0gKCk9PntcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHttZX09dXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUudXNlcik7XHJcbiAgICBjb25zdCB7bWFpblBvc3RzLGhhc01vcmVQb3N0c30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9QT1NUU19SRVFVRVNUXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKXtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIHNjcm9sbFkgOiDslrzrp4jrgpgg64K066C464qU7KeAXHJcbiAgICAgICAgICAgICAqIGNsaWVudEhlaWdodCA6IO2ZlOuptCDrs7TsnbTripQg6ri47J20XHJcbiAgICAgICAgICAgICAqIHNjcm9sbEhlaWdodCA6IOy0nSDquLjsnbRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWStkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0PT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBpZihoYXNNb3JlUG9zdHM9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7dHlwZTpMT0FEX1BPU1RTX1JFUVVFU1R9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLG9uU2Nyb2xsKTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgLy/rqZTrqqjrpqwg7Zek7KCcIO2VmOq4sCDsnITtlbQuXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLG9uU2Nyb2xsKTtcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICB7bWUmJjwgUG9zdEZvcm0vPn1cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QsaWR4KT0+PFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0vPil9XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==