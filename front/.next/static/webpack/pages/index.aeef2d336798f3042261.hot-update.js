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
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"]
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
      lineNumber: 17,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(FollowButton, "TegDZG94ZlQI8zpq6u00XIIDF/I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJmb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dMb2FkaW5nIiwiaXNGb2xsb3dpbmciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkNsaWNrQnV0dG9uIiwidXNlQ2FsbGJhY2siLCJkaXNwYXRjaCIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFlBQVksR0FBQyxTQUFiQSxZQUFhLE9BQVU7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQ3pCLHFCQUF5Q0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBU0EsS0FBSyxDQUFDQyxJQUFmO0FBQUEsR0FBRCxDQUFwRDtBQUFBLE1BQU9DLEVBQVAsZ0JBQU9BLEVBQVA7QUFBQSxNQUFVQyxhQUFWLGdCQUFVQSxhQUFWO0FBQUEsTUFBd0JDLGVBQXhCLGdCQUF3QkEsZUFBeEI7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHSCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRUksVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFLQSxDQUFDLENBQUNDLEVBQUYsS0FBT1gsSUFBSSxDQUFDWSxJQUFMLENBQVVELEVBQXRCO0FBQUEsR0FBcEIsQ0FBcEI7QUFDQSxNQUFNRSxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUNwQyxRQUFHUCxXQUFILEVBQWU7QUFDWFEsY0FBUSxDQUFDO0FBQUNDLFlBQUksRUFBQ0MsK0RBQWdCQTtBQUF0QixPQUFELENBQVI7QUFDSDtBQUNKLEdBSmdDLEVBSS9CLENBQUNWLFdBQUQsQ0FKK0IsQ0FBakM7QUFLQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFRixhQUFhLElBQUVDLGVBQWhDO0FBQWlELG1CQUFhLEVBQUVPLGFBQWhFO0FBQUEsZ0JBQ0tOLFdBQVcsR0FBQyxNQUFELEdBQVE7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLG1CQURKO0FBT0gsQ0FmRDs7R0FBTVIsWTtVQUN1Q0UsdUQ7OztLQUR2Q0YsWTtBQWlCTkEsWUFBWSxDQUFDbUIsU0FBYixHQUF1QjtBQUNuQmxCLE1BQUksRUFBQ21CLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREgsQ0FBdkI7QUFJZXRCLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFlZWYyZDMzNjc5OGYzMDQyMjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0J1dHRvbj0oe3Bvc3R9KT0+e1xyXG4gICAgY29uc3Qge21lLGZvbGxvd0xvYWRpbmcsdW5mb2xsb3dMb2FkaW5nfT11c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS51c2VyKTtcclxuICAgIGNvbnN0IGlzRm9sbG93aW5nID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodik9PnYuaWQ9PT1wb3N0LlVzZXIuaWQpO1xyXG4gICAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBpZihpc0ZvbGxvd2luZyl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOlVORk9MTE9XX1JFUVVFU1R9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW2lzRm9sbG93aW5nXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEJ1dHRvbiBsb2FkaW5nPXtmb2xsb3dMb2FkaW5nfHx1bmZvbGxvd0xvYWRpbmd9IG9uQ2xpY2tCdXR0b249e29uQ2xpY2tCdXR0b259PlxyXG4gICAgICAgICAgICAgICAge2lzRm9sbG93aW5nPyfslrjtjJTroZzsmrAnOiftjJTroZzsmrAnfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXM9e1xyXG4gICAgcG9zdDpQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0J1dHRvbjsiXSwic291cmNlUm9vdCI6IiJ9