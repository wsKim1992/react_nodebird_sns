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
      hasMorePost = _useSelector2.hasMorePost;

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
        if (hasMorePost) {
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

_s(Home, "QPzzH8snUGMffSVqYpZ9hc3KSkY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0IiwidXNlRWZmZWN0IiwidHlwZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIm9uU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIiwiaWR4IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBSTtBQUFBOztBQUNiLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQVdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVNBLEtBQUssQ0FBQ0MsSUFBZjtBQUFBLEdBQUQsQ0FBdEI7QUFBQSxNQUFPQyxFQUFQLGdCQUFPQSxFQUFQOztBQUNBLHNCQUFnQ0gsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDRyxJQUFmO0FBQUEsR0FBRCxDQUEzQztBQUFBLE1BQU9DLFNBQVAsaUJBQU9BLFNBQVA7QUFBQSxNQUFpQkMsV0FBakIsaUJBQWlCQSxXQUFqQjs7QUFFQUMseURBQVMsQ0FBQyxZQUFJO0FBQ1ZULFlBQVEsQ0FBQztBQUNMVSxVQUFJLEVBQUNDLGlFQUFrQkE7QUFEbEIsS0FBRCxDQUFSO0FBR0gsR0FKUSxFQUlQLEVBSk8sQ0FBVDtBQU1BRix5REFBUyxDQUFDLFlBQUk7QUFDVixhQUFTRyxRQUFULEdBQW1CO0FBQ2Y7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNZQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsTUFBTSxDQUFDQyxPQUFuQjtBQUNBSCxhQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUFyQztBQUNBTixhQUFPLENBQUNDLEdBQVIsQ0FBWUcsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUFyQzs7QUFDQSxVQUFHTCxNQUFNLENBQUNDLE9BQVAsR0FBZUMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUF4QyxLQUF1REYsUUFBUSxDQUFDQyxlQUFULENBQXlCRSxZQUFuRixFQUFnRztBQUM1RixZQUFHWixXQUFILEVBQWU7QUFDWFIsa0JBQVEsQ0FBQztBQUFDVSxnQkFBSSxFQUFDQyxpRUFBa0JBO0FBQXhCLFdBQUQsQ0FBUjtBQUNIO0FBQ0o7QUFDSjs7QUFDREksVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFpQ1QsUUFBakM7QUFDQSxXQUFPLFlBQUk7QUFDUDtBQUNBRyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQW9DVixRQUFwQztBQUNILEtBSEQ7QUFJSCxHQXJCUSxFQXFCUCxFQXJCTyxDQUFUO0FBdUJBLHNCQUNJLHFFQUFDLDZEQUFEO0FBQUEsZUFDS1AsRUFBRSxpQkFBRSxxRUFBRSw0REFBRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFQsRUFFS0UsU0FBUyxDQUFDZ0IsR0FBVixDQUFjLFVBQUNqQixJQUFELEVBQU1rQixHQUFOO0FBQUEsMEJBQVkscUVBQUMsNERBQUQ7QUFBd0IsWUFBSSxFQUFFbEI7QUFBOUIsU0FBZUEsSUFBSSxDQUFDbUIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFaO0FBQUEsS0FBZCxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUgsQ0F4Q0Q7O0dBQU0xQixJO1VBQ2VFLHVELEVBQ05DLHVELEVBQ3FCQSx1RDs7O0tBSDlCSCxJO0FBMENTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kODM5ODE2OWQ1N2I4M2EwN2I4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Rm9ybVwiO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpPT57XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7bWV9PXVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIpO1xyXG4gICAgY29uc3Qge21haW5Qb3N0cyxoYXNNb3JlUG9zdH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5wb3N0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9QT1NUU19SRVFVRVNUXHJcbiAgICAgICAgfSlcclxuICAgIH0sW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZnVuY3Rpb24gb25TY3JvbGwoKXtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIHNjcm9sbFkgOiDslrzrp4jrgpgg64K066C464qU7KeAXHJcbiAgICAgICAgICAgICAqIGNsaWVudEhlaWdodCA6IO2ZlOuptCDrs7TsnbTripQg6ri47J20XHJcbiAgICAgICAgICAgICAqIHNjcm9sbEhlaWdodCA6IOy0nSDquLjsnbRcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQpO1xyXG4gICAgICAgICAgICBpZih3aW5kb3cuc2Nyb2xsWStkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0PT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCl7XHJcbiAgICAgICAgICAgICAgICBpZihoYXNNb3JlUG9zdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe3R5cGU6TE9BRF9QT1NUU19SRVFVRVNUfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxvblNjcm9sbCk7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8v66mU66qo66asIO2XpOygnCDtlZjquLAg7JyE7ZW0LlxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyxvblNjcm9sbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAge21lJiY8IFBvc3RGb3JtLz59XHJcbiAgICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0LGlkeCk9PjxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9Lz4pfVxyXG4gICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=