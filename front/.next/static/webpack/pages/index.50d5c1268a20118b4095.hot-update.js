webpackHotUpdate_N_E("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\study\\nodebird_sns\\front\\components\\FollowButton.js",
    _this = undefined,
    _s = $RefreshSig$();









var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isFollowing) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, [isFollowing]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      loading: followLoading || unfollowLoading,
      onClickButton: onClickButton,
      children: isFollowing ? '언팔로우' : '팔로우'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(FollowButton, "toU2GA76QL5q26bjQPl4Db8hs7M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImlzRm9sbG93aW5nIiwiRm9sbG93aW5ncyIsImZpbmQiLCJ2IiwiaWQiLCJVc2VyIiwib25DbGlja0J1dHRvbiIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJkYXRhIiwiRk9MTE9XX1JFUVVFU1QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsWUFBWSxHQUFDLFNBQWJBLFlBQWEsT0FBVTtBQUFBOztBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTtBQUN6QixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUF5Q0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUFwRDtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7QUFBQSxNQUFVQyxhQUFWLGdCQUFVQSxhQUFWO0FBQUEsTUFBd0JDLGVBQXhCLGdCQUF3QkEsZUFBeEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHSCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRUksVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFLQSxDQUFDLENBQUNDLEVBQUYsS0FBT2IsSUFBSSxDQUFDYyxJQUFMLENBQVVELEVBQXRCO0FBQUEsR0FBcEIsQ0FBcEI7QUFDQSxNQUFNRSxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQyxRQUFHUCxXQUFILEVBQWU7QUFDWFIsY0FBUSxDQUFDO0FBQ0xnQixZQUFJLEVBQUNDLCtEQURBO0FBRUxDLFlBQUksRUFBQ25CLElBQUksQ0FBQ2MsSUFBTCxDQUFVRDtBQUZWLE9BQUQsQ0FBUjtBQUlILEtBTEQsTUFLSztBQUNEWixjQUFRLENBQUM7QUFDTGdCLFlBQUksRUFBQ0csNkRBREE7QUFFTEQsWUFBSSxFQUFDbkIsSUFBSSxDQUFDYyxJQUFMLENBQVVEO0FBRlYsT0FBRCxDQUFSO0FBSUg7QUFDSixHQVpnQyxFQVkvQixDQUFDSixXQUFELENBWitCLENBQWpDO0FBY0Esc0JBQ0k7QUFBQSwyQkFDSSxxRUFBQywyQ0FBRDtBQUFRLGFBQU8sRUFBRUYsYUFBYSxJQUFFQyxlQUFoQztBQUFpRCxtQkFBYSxFQUFFTyxhQUFoRTtBQUFBLGdCQUNLTixXQUFXLEdBQUMsTUFBRCxHQUFRO0FBRHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQU9ILENBekJEOztHQUFNVixZO1VBQ2VHLHVELEVBQ3dCQyx1RDs7O0tBRnZDSixZO0FBMkJOQSxZQUFZLENBQUNzQixTQUFiLEdBQXVCO0FBQ25CckIsTUFBSSxFQUFDc0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFESCxDQUF2QjtBQUllekIsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTBkNWMxMjY4YTIwMTE4YjQwOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3Rvcix1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbj0oe3Bvc3R9KT0+e1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge21lLGZvbGxvd0xvYWRpbmcsdW5mb2xsb3dMb2FkaW5nfT11c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodik9PnYuaWQ9PT1wb3N0LlVzZXIuaWQpO1xyXG4gICAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZihpc0ZvbGxvd2luZyl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICAgICAgICAgIGRhdGE6cG9zdC5Vc2VyLmlkLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTpwb3N0LlVzZXIuaWQsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbaXNGb2xsb3dpbmddKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmd8fHVuZm9sbG93TG9hZGluZ30gb25DbGlja0J1dHRvbj17b25DbGlja0J1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICB7aXNGb2xsb3dpbmc/J+yWuO2MlOuhnOyasCc6J+2MlOuhnOyasCd9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuRm9sbG93QnV0dG9uLnByb3BUeXBlcz17XHJcbiAgICBwb3N0OlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uOyJdLCJzb3VyY2VSb290IjoiIn0=