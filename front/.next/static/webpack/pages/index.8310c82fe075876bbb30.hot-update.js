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
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

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
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
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
  }, [hasMorePosts, loadPostsLoading]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [me && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 18
    }, _this), mainPosts.map(function (post, idx) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 40
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, _this);
};

_s(Home, "sl4KM2cJiV9EMyhpvi77kqF78/k=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkeCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQUk7QUFBQTs7QUFDYixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUFXQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFTQSxLQUFLLENBQUNDLElBQWY7QUFBQSxHQUFELENBQXRCO0FBQUEsTUFBT0MsRUFBUCxnQkFBT0EsRUFBUDs7QUFDQSxzQkFBa0RILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0csSUFBZjtBQUFBLEdBQUQsQ0FBN0Q7QUFBQSxNQUFPQyxTQUFQLGlCQUFPQSxTQUFQO0FBQUEsTUFBaUJDLFlBQWpCLGlCQUFpQkEsWUFBakI7QUFBQSxNQUE4QkMsZ0JBQTlCLGlCQUE4QkEsZ0JBQTlCOztBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDVlYsWUFBUSxDQUFDO0FBQ0xXLFVBQUksRUFBQ0MsaUVBQWtCQTtBQURsQixLQUFELENBQVI7QUFHSCxHQUpRLEVBSVAsRUFKTyxDQUFUO0FBTUFGLHlEQUFTLENBQUMsWUFBSTtBQUNWLGFBQVNHLFFBQVQsR0FBbUI7QUFDZjtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ1ksVUFBR0MsTUFBTSxDQUFDQyxPQUFQLEdBQWVDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsWUFBeEMsR0FBcURGLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkUsWUFBekIsR0FBc0MsR0FBOUYsRUFBa0c7QUFDOUYsWUFBR1gsWUFBWSxJQUFFLENBQUNDLGdCQUFsQixFQUFtQztBQUMvQlQsa0JBQVEsQ0FBQztBQUFDVyxnQkFBSSxFQUFDQyxpRUFBa0JBO0FBQXhCLFdBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSjs7QUFDREUsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFpQ1AsUUFBakM7QUFDQSxXQUFPLFlBQUk7QUFDUDtBQUNBQyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQW9DUixRQUFwQztBQUNILEtBSEQ7QUFJSCxHQWxCUSxFQWtCUCxDQUFDTCxZQUFELEVBQWNDLGdCQUFkLENBbEJPLENBQVQ7QUFvQkEsc0JBQ0kscUVBQUMsNkRBQUQ7QUFBQSxlQUNLSixFQUFFLGlCQUFFLHFFQUFFLDREQUFGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEVCxFQUVLRSxTQUFTLENBQUNlLEdBQVYsQ0FBYyxVQUFDaEIsSUFBRCxFQUFNaUIsR0FBTjtBQUFBLDBCQUFZLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRWpCO0FBQTlCLFNBQWVBLElBQUksQ0FBQ2tCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjtBQUFBLEtBQWQsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBckNEOztHQUFNekIsSTtVQUNlRSx1RCxFQUNOQyx1RCxFQUN1Q0EsdUQ7OztLQUhoREgsSTtBQXVDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODMxMGM4MmZlMDc1ODc2YmJiMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lfT11c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHttYWluUG9zdHMsaGFzTW9yZVBvc3RzLGxvYWRQb3N0c0xvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKT0+c3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVFNfUkVRVUVTVFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCl7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBzY3JvbGxZIDog7Ja866eI64KYIOuCtOuguOuKlOyngFxyXG4gICAgICAgICAgICAgKiBjbGllbnRIZWlnaHQgOiDtmZTrqbQg67O07J2064qUIOq4uOydtFxyXG4gICAgICAgICAgICAgKiBzY3JvbGxIZWlnaHQgOiDstJ0g6ri47J20XHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWStkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0PmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQtMzAwKXtcclxuICAgICAgICAgICAgICAgIGlmKGhhc01vcmVQb3N0cyYmIWxvYWRQb3N0c0xvYWRpbmcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOkxPQURfUE9TVFNfUkVRVUVTVH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsb25TY3JvbGwpO1xyXG4gICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAvL+uplOuqqOumrCDtl6TsoJwg7ZWY6riwIOychO2VtC5cclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsb25TY3JvbGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sW2hhc01vcmVQb3N0cyxsb2FkUG9zdHNMb2FkaW5nXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lJiY8IFBvc3RGb3JtLz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0LGlkeCk9PjxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=