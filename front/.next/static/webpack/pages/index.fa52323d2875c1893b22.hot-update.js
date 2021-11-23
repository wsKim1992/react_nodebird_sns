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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWR4IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSTtBQUFBOztBQUNiLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQVdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FBdEI7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQOztBQUNBLHNCQUFpQ0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDRyxJQUFmO0FBQUEsR0FBRCxDQUE1QztBQUFBLE1BQU9DLFNBQVAsaUJBQU9BLFNBQVA7QUFBQSxNQUFpQkMsWUFBakIsaUJBQWlCQSxZQUFqQjs7QUFFQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZULFlBQVEsQ0FBQztBQUNMVSxVQUFJLEVBQUNDLGlFQUFrQkE7QUFEbEIsS0FBRCxDQUFSO0FBR0gsR0FKUSxFQUlQLEVBSk8sQ0FBVDtBQU1BRix5REFBUyxDQUFDLFlBQUk7QUFDVixhQUFTRyxRQUFULEdBQW1CO0FBQ2Y7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNZLFVBQUdDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFlQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQXhDLEtBQXVERixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQW5GLEVBQWdHO0FBQzVGLFlBQUdWLFlBQVksS0FBRyxJQUFsQixFQUF1QjtBQUNuQlIsa0JBQVEsQ0FBQztBQUFDVSxnQkFBSSxFQUFDQyxpRUFBa0JBO0FBQXhCLFdBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSjs7QUFDREUsVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFpQ1AsUUFBakM7QUFDQSxXQUFPLFlBQUk7QUFDUDtBQUNBQyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQW9DUixRQUFwQztBQUNILEtBSEQ7QUFJSCxHQWxCUSxFQWtCUCxFQWxCTyxDQUFUO0FBb0JBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsZUFDS1AsRUFBRSxpQkFBRSxxRUFBRSw0REFBRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFQsRUFFS0UsU0FBUyxDQUFDYyxHQUFWLENBQWMsVUFBQ2YsSUFBRCxFQUFNZ0IsR0FBTjtBQUFBLDBCQUFZLHFFQUFDLDREQUFEO0FBQXdCLFlBQUksRUFBRWhCO0FBQTlCLFNBQWVBLElBQUksQ0FBQ2lCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWjtBQUFBLEtBQWQsQ0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBckNEOztHQUFNeEIsSTtVQUNlRSx1RCxFQUNOQyx1RCxFQUNzQkEsdUQ7OztLQUgvQkgsSTtBQXVDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmE1MjMyM2QyODc1YzE4OTNiMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEZvcm1cIjtcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lfT11c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IHttYWluUG9zdHMsaGFzTW9yZVBvc3RzfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnBvc3QpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RTX1JFUVVFU1RcclxuICAgICAgICB9KVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBmdW5jdGlvbiBvblNjcm9sbCgpe1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogc2Nyb2xsWSA6IOyWvOuniOuCmCDrgrTroLjripTsp4BcclxuICAgICAgICAgICAgICogY2xpZW50SGVpZ2h0IDog7ZmU66m0IOuztOydtOuKlCDquLjsnbRcclxuICAgICAgICAgICAgICogc2Nyb2xsSGVpZ2h0IDog7LSdIOq4uOydtFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaWYod2luZG93LnNjcm9sbFkrZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodD09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpe1xyXG4gICAgICAgICAgICAgICAgaWYoaGFzTW9yZVBvc3RzPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6TE9BRF9QT1NUU19SRVFVRVNUfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8v66mU66qo66asIO2XpOygnCDtlZjquLAg7JyE7ZW0LlxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxvblNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lJiY8IFBvc3RGb3JtLz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0LGlkeCk9PjxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=