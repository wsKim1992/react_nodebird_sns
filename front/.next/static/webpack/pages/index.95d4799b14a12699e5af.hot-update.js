webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_FAILURE, LOG_OUT_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_SUCCESS, FOLLOW_REQUEST, FOLLOW_FAILURE, FOLLOW_SUCCESS, UNFOLLOW_REQUEST, UNFOLLOW_FAILURE, UNFOLLOW_SUCCESS, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginAction, loginRequestAction, loginSuccessAction, loginFailureAction, logoutRequestAction, logoutSuccessAction, logoutRequestFailure, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestFailure", function() { return logoutRequestFailure; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = {
  unfollowLoading: false,
  unfollowDone: false,
  unfollowError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'DntjrKim',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '부기초'
    }, {
      nickname: '부기초'
    }, {
      nickname: '부기초'
    }],
    Followers: [{
      nickname: '부기초'
    }, {
      nickname: '부기초'
    }, {
      nickname: '부기초'
    }]
  });
}; //action creator


var loginAction = function loginAction(data) {
  return function (dispatch, getState) {
    dispatch(loginRequestAction());
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/login').then(function (res) {
      dispatch(loginSuccessAction(res.data));
    })["catch"](function (err) {
      dispatch(loginFailureAction(err));
    });
  };
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var loginSuccessAction = function loginSuccessAction(data) {
  return {
    type: LOG_IN_SUCCESS,
    data: data
  };
};
var loginFailureAction = function loginFailureAction(data) {
  return {
    type: LOG_IN_FAILURE,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};
var logoutSuccessAction = function logoutSuccessAction() {
  return {
    type: LOG_OUT_SUCCESS
  };
};
var logoutRequestFailure = function logoutRequestFailure() {
  return {
    type: LOG_OUT_FAILURE
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true, draft.unfollowError = null, draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true, draft.followError = null, draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true, draft.logInError = null, draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true, draft.logOutError = null, draft.logOutDone = false;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      /* return{
          ...state,
          me:{
              ...state.me,
              Posts:[{id:action.data},...state.me.Posts],
          }
      } */

      case REMOVE_POST_OF_ME:
        draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      /* return{
          ...state,
          me:{
              ...state.me,
              Posts:state.me.Posts.filter((v)=>v.id!==action.data),
          }
      } */

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19GQUlMVVJFIiwiRk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpbkFjdGlvbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJlcnIiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0RmFpbHVyZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImZpbHRlciIsInYiLCJlcnJvciIsInB1c2giLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBQztBQUN0QkMsaUJBQWUsRUFBQyxLQURNO0FBRXRCQyxjQUFZLEVBQUMsS0FGUztBQUd0QkMsZUFBYSxFQUFDLElBSFE7QUFJdEJDLGVBQWEsRUFBQyxLQUpRO0FBS3RCQyxZQUFVLEVBQUMsS0FMVztBQU10QkMsYUFBVyxFQUFDLElBTlU7QUFPdEJDLGNBQVksRUFBQyxLQVBTO0FBUXRCQyxXQUFTLEVBQUMsS0FSWTtBQVN0QkMsWUFBVSxFQUFDLElBVFc7QUFVdEJDLGVBQWEsRUFBQyxLQVZRO0FBV3RCQyxZQUFVLEVBQUMsS0FYVztBQVl0QkMsYUFBVyxFQUFDLElBWlU7QUFhdEJDLGVBQWEsRUFBQyxLQWJRO0FBY3RCQyxZQUFVLEVBQUMsS0FkVztBQWV0QkMsYUFBVyxFQUFDLElBZlU7QUFnQnRCQyx1QkFBcUIsRUFBQyxLQWhCQTtBQWlCdEJDLG9CQUFrQixFQUFDLEtBakJHO0FBa0J0QkMscUJBQW1CLEVBQUMsSUFsQkU7QUFtQnRCQyxJQUFFLEVBQUMsSUFuQm1CO0FBb0J0QkMsWUFBVSxFQUFDLEVBcEJXO0FBcUJ0QkMsV0FBUyxFQUFDO0FBckJZLENBQW5CO0FBd0JBLElBQU1DLGNBQWMsR0FBQyxnQkFBckI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUNBLElBQU1DLHVCQUF1QixHQUFHLHlCQUFoQztBQUdBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBQyxtQkFBeEI7O0FBRVAsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRDtBQUFBLHlDQUNYQSxJQURXO0FBQ05DLFlBQVEsRUFBQyxVQURIO0FBRWRDLE1BQUUsRUFBQyxDQUZXO0FBRVRDLFNBQUssRUFBQyxDQUFDO0FBQUNELFFBQUUsRUFBQztBQUFKLEtBQUQsQ0FGRztBQUdkRSxjQUFVLEVBQUMsQ0FBQztBQUFDSCxjQUFRLEVBQUM7QUFBVixLQUFELEVBQWtCO0FBQUNBLGNBQVEsRUFBQztBQUFWLEtBQWxCLEVBQW1DO0FBQUNBLGNBQVEsRUFBQztBQUFWLEtBQW5DLENBSEc7QUFJZEksYUFBUyxFQUFDLENBQUM7QUFBQ0osY0FBUSxFQUFDO0FBQVYsS0FBRCxFQUFrQjtBQUFDQSxjQUFRLEVBQUM7QUFBVixLQUFsQixFQUFtQztBQUFDQSxjQUFRLEVBQUM7QUFBVixLQUFuQztBQUpJO0FBQUEsQ0FBbEIsQyxDQU9BOzs7QUFDTyxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTixJQUFELEVBQVE7QUFDL0IsU0FBTyxVQUFDTyxRQUFELEVBQVVDLFFBQVYsRUFBcUI7QUFDeEJELFlBQVEsQ0FBQ0Usa0JBQWtCLEVBQW5CLENBQVI7QUFDQUMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLFlBQVYsRUFDQ0MsSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBTztBQUNUTixjQUFRLENBQUNPLGtCQUFrQixDQUFDRCxHQUFHLENBQUNiLElBQUwsQ0FBbkIsQ0FBUjtBQUNILEtBSEQsV0FJTyxVQUFDZSxHQUFELEVBQU87QUFDVlIsY0FBUSxDQUFDUyxrQkFBa0IsQ0FBQ0QsR0FBRCxDQUFuQixDQUFSO0FBQ0gsS0FORDtBQU9ILEdBVEQ7QUFVSCxDQVhNO0FBYUEsSUFBTU4sa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDVCxJQUFELEVBQVE7QUFDdEMsU0FBTTtBQUNGaUIsUUFBSSxFQUFDdEMsY0FESDtBQUNrQnFCLFFBQUksRUFBSkE7QUFEbEIsR0FBTjtBQUdILENBSk07QUFNQSxJQUFNYyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNkLElBQUQsRUFBUTtBQUN0QyxTQUFNO0FBQ0ZpQixRQUFJLEVBQUNyQyxjQURIO0FBQ2tCb0IsUUFBSSxFQUFKQTtBQURsQixHQUFOO0FBR0gsQ0FKTTtBQU1BLElBQU1nQixrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNoQixJQUFELEVBQVE7QUFDdEMsU0FBTTtBQUNGaUIsUUFBSSxFQUFDcEMsY0FESDtBQUNrQm1CLFFBQUksRUFBSkE7QUFEbEIsR0FBTjtBQUdILENBSk07QUFNQSxJQUFNa0IsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFJO0FBQ25DLFNBQU07QUFDRkQsUUFBSSxFQUFDbkM7QUFESCxHQUFOO0FBR0gsQ0FKTTtBQU1BLElBQU1xQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQUk7QUFDbkMsU0FBTTtBQUNGRixRQUFJLEVBQUNqQztBQURILEdBQU47QUFHSCxDQUpNO0FBTUEsSUFBTW9DLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBSTtBQUNwQyxTQUFNO0FBQ0ZILFFBQUksRUFBQ2xDO0FBREgsR0FBTjtBQUdILENBSk07O0FBTVAsSUFBTXNDLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQTZCO0FBQUEsTUFBNUJDLEtBQTRCLHVFQUF0QmpFLFlBQXNCO0FBQUEsTUFBVGtFLE1BQVM7QUFDekMsU0FBT0MscURBQU8sQ0FBQ0YsS0FBRCxFQUFPLFVBQUNHLEtBQUQsRUFBUztBQUMxQixZQUFPRixNQUFNLENBQUNOLElBQWQ7QUFDSSxXQUFLdkIsZ0JBQUw7QUFDSStCLGFBQUssQ0FBQ25FLGVBQU4sR0FBc0IsSUFBdEIsRUFDQW1FLEtBQUssQ0FBQ2pFLGFBQU4sR0FBb0IsSUFEcEIsRUFFQWlFLEtBQUssQ0FBQ2xFLFlBQU4sR0FBbUIsS0FGbkI7QUFHQTs7QUFDSixXQUFLcUMsZ0JBQUw7QUFDSTZCLGFBQUssQ0FBQ25FLGVBQU4sR0FBc0IsS0FBdEI7QUFDQW1FLGFBQUssQ0FBQ2xFLFlBQU4sR0FBbUIsSUFBbkI7QUFDQWtFLGFBQUssQ0FBQ2pELEVBQU4sQ0FBUzRCLFVBQVQsR0FBc0JxQixLQUFLLENBQUNqRCxFQUFOLENBQVM0QixVQUFULENBQW9Cc0IsTUFBcEIsQ0FBMkIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFLQSxDQUFDLENBQUN6QixFQUFGLEtBQU9xQixNQUFNLENBQUN2QixJQUFuQjtBQUFBLFNBQTNCLENBQXRCO0FBQ0E7O0FBQ0osV0FBS0wsZ0JBQUw7QUFDSThCLGFBQUssQ0FBQ25FLGVBQU4sR0FBc0IsS0FBdEI7QUFDQW1FLGFBQUssQ0FBQ2pFLGFBQU4sR0FBb0IrRCxNQUFNLENBQUNLLEtBQTNCO0FBQ0E7O0FBQ0osV0FBS3JDLGNBQUw7QUFDSWtDLGFBQUssQ0FBQ2hFLGFBQU4sR0FBb0IsSUFBcEIsRUFDQWdFLEtBQUssQ0FBQzlELFdBQU4sR0FBa0IsSUFEbEIsRUFFQThELEtBQUssQ0FBQy9ELFVBQU4sR0FBaUIsS0FGakI7QUFHQTs7QUFDSixXQUFLK0IsY0FBTDtBQUNJZ0MsYUFBSyxDQUFDaEUsYUFBTixHQUFvQixLQUFwQjtBQUNBZ0UsYUFBSyxDQUFDL0QsVUFBTixHQUFpQixJQUFqQjtBQUNBK0QsYUFBSyxDQUFDakQsRUFBTixDQUFTNEIsVUFBVCxDQUFvQnlCLElBQXBCLENBQXlCO0FBQUMzQixZQUFFLEVBQUNxQixNQUFNLENBQUN2QjtBQUFYLFNBQXpCO0FBQ0E7O0FBQ0osV0FBS1IsY0FBTDtBQUNJaUMsYUFBSyxDQUFDaEUsYUFBTixHQUFvQixLQUFwQjtBQUNBZ0UsYUFBSyxDQUFDOUQsV0FBTixHQUFrQjRELE1BQU0sQ0FBQ0ssS0FBekI7QUFDQTs7QUFDSixXQUFLakQsY0FBTDtBQUNJOEMsYUFBSyxDQUFDN0QsWUFBTixHQUFtQixJQUFuQixFQUNBNkQsS0FBSyxDQUFDM0QsVUFBTixHQUFpQixJQURqQixFQUVBMkQsS0FBSyxDQUFDNUQsU0FBTixHQUFnQixLQUZoQjtBQUdBOztBQUNKLFdBQUtlLGNBQUw7QUFDSTZDLGFBQUssQ0FBQzdELFlBQU4sR0FBbUIsS0FBbkI7QUFDQTZELGFBQUssQ0FBQzVELFNBQU4sR0FBZ0IsSUFBaEI7QUFDQTRELGFBQUssQ0FBQ2pELEVBQU4sR0FBU3VCLFNBQVMsQ0FBQ3dCLE1BQU0sQ0FBQ3ZCLElBQVIsQ0FBbEI7QUFDQTs7QUFDSixXQUFLbkIsY0FBTDtBQUNJNEMsYUFBSyxDQUFDN0QsWUFBTixHQUFtQixLQUFuQjtBQUNBNkQsYUFBSyxDQUFDM0QsVUFBTixHQUFpQnlELE1BQU0sQ0FBQ0ssS0FBeEI7QUFDQTs7QUFDSixXQUFLOUMsZUFBTDtBQUNJMkMsYUFBSyxDQUFDMUQsYUFBTixHQUFvQixJQUFwQixFQUNBMEQsS0FBSyxDQUFDeEQsV0FBTixHQUFrQixJQURsQixFQUVBd0QsS0FBSyxDQUFDekQsVUFBTixHQUFpQixLQUZqQjtBQUdBOztBQUNKLFdBQUtnQixlQUFMO0FBQ0l5QyxhQUFLLENBQUMxRCxhQUFOLEdBQW9CLEtBQXBCO0FBQ0EwRCxhQUFLLENBQUN6RCxVQUFOLEdBQWlCLElBQWpCO0FBQ0F5RCxhQUFLLENBQUNqRCxFQUFOLEdBQVMsSUFBVDtBQUNBOztBQUNKLFdBQUtPLGVBQUw7QUFDSTBDLGFBQUssQ0FBQzFELGFBQU4sR0FBb0IsS0FBcEI7QUFDQTBELGFBQUssQ0FBQ3hELFdBQU4sR0FBa0JzRCxNQUFNLENBQUNLLEtBQXpCO0FBQ0E7O0FBQ0osV0FBSzNDLGVBQUw7QUFDSXdDLGFBQUssQ0FBQ3ZELGFBQU4sR0FBb0IsSUFBcEI7QUFDQXVELGFBQUssQ0FBQ3RELFVBQU4sR0FBaUIsS0FBakI7QUFDQXNELGFBQUssQ0FBQ3JELFdBQU4sR0FBa0IsSUFBbEI7QUFDQTs7QUFDSixXQUFLZSxlQUFMO0FBQ0lzQyxhQUFLLENBQUN2RCxhQUFOLEdBQW9CLEtBQXBCO0FBQ0F1RCxhQUFLLENBQUN0RCxVQUFOLEdBQWlCLElBQWpCO0FBQ0E7O0FBQ0osV0FBS2UsZUFBTDtBQUNJdUMsYUFBSyxDQUFDdkQsYUFBTixHQUFvQixLQUFwQjtBQUNBdUQsYUFBSyxDQUFDckQsV0FBTixHQUFrQm1ELE1BQU0sQ0FBQ0ssS0FBekI7QUFDQTs7QUFDSixXQUFLeEMsdUJBQUw7QUFDSXFDLGFBQUssQ0FBQ3BELHFCQUFOLEdBQTRCLElBQTVCO0FBQ0FvRCxhQUFLLENBQUNuRCxrQkFBTixHQUF5QixLQUF6QjtBQUNBbUQsYUFBSyxDQUFDbEQsbUJBQU4sR0FBMEIsSUFBMUI7QUFDQTs7QUFDSixXQUFLZSx1QkFBTDtBQUNJbUMsYUFBSyxDQUFDcEQscUJBQU4sR0FBNEIsS0FBNUI7QUFDQW9ELGFBQUssQ0FBQ25ELGtCQUFOLEdBQXlCLElBQXpCO0FBQ0E7O0FBQ0osV0FBS2UsdUJBQUw7QUFDSW9DLGFBQUssQ0FBQ3BELHFCQUFOLEdBQTRCLEtBQTVCO0FBQ0FvRCxhQUFLLENBQUNsRCxtQkFBTixHQUEwQmdELE1BQU0sQ0FBQ0ssS0FBakM7QUFDQTs7QUFDSixXQUFLL0IsY0FBTDtBQUNJNEIsYUFBSyxDQUFDakQsRUFBTixDQUFTMkIsS0FBVCxDQUFlMkIsT0FBZixDQUF1QjtBQUFDNUIsWUFBRSxFQUFDcUIsTUFBTSxDQUFDdkI7QUFBWCxTQUF2QjtBQUNBOztBQUNBO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDWSxXQUFLRixpQkFBTDtBQUNJMkIsYUFBSyxDQUFDakQsRUFBTixDQUFTMkIsS0FBVCxDQUFldUIsTUFBZixDQUFzQixVQUFDQyxDQUFEO0FBQUEsaUJBQUtBLENBQUMsQ0FBQ3pCLEVBQUYsS0FBT3FCLE1BQU0sQ0FBQ3ZCLElBQW5CO0FBQUEsU0FBdEI7QUFDQTs7QUFDQTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ1k7QUFDSTtBQXhHUjtBQTBHSCxHQTNHYSxDQUFkO0FBNEdILENBN0dEOztBQStHZXFCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk1ZDQ3OTliMTRhMTI2OTllNWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlPXtcclxuICAgIHVuZm9sbG93TG9hZGluZzpmYWxzZSxcclxuICAgIHVuZm9sbG93RG9uZTpmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6bnVsbCxcclxuICAgIGZvbGxvd0xvYWRpbmc6ZmFsc2UsXHJcbiAgICBmb2xsb3dEb25lOmZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6bnVsbCxcclxuICAgIGxvZ0luTG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ0luRG9uZTpmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6bnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dPdXREb25lOmZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6bnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6ZmFsc2UsXHJcbiAgICBzaWduVXBEb25lOmZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6bnVsbCxcclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzpmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTpmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6bnVsbCxcclxuICAgIG1lOm51bGwsXHJcbiAgICBzaWduVXBEYXRhOnt9LFxyXG4gICAgbG9naW5EYXRhOnt9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVD0nTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FPSdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSk9Pih7XHJcbiAgICAuLi5kYXRhLG5pY2tuYW1lOidEbnRqcktpbScsXHJcbiAgICBpZDoxLFBvc3RzOlt7aWQ6MX1dLFxyXG4gICAgRm9sbG93aW5nczpbe25pY2tuYW1lOifrtoDquLDstIgnfSx7bmlja25hbWU6J+u2gOq4sOy0iCd9LHtuaWNrbmFtZTon67aA6riw7LSIJ31dLFxyXG4gICAgRm9sbG93ZXJzOlt7bmlja25hbWU6J+u2gOq4sOy0iCd9LHtuaWNrbmFtZTon67aA6riw7LSIJ30se25pY2tuYW1lOifrtoDquLDstIgnfV1cclxufSlcclxuXHJcbi8vYWN0aW9uIGNyZWF0b3JcclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpPT57XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoLGdldFN0YXRlKT0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuICAgICAgICBheGlvcy5nZXQoJy9hcGkvbG9naW4nKVxyXG4gICAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihlcnIpKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9TVUNDRVNTLGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbiA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX0ZBSUxVUkUsZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9ICgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1JFUVVFU1RcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb24gPSAoKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9TVUNDRVNTXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0RmFpbHVyZSA9ICgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX0ZBSUxVUkVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZT1pbml0aWFsU3RhdGUsYWN0aW9uKT0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPWZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPXRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZT1mYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHtpZDphY3Rpb24uZGF0YX0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lPWZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9ZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPXRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZT1mYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLyogcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzOlt7aWQ6YWN0aW9uLmRhdGF9LC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvKiByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdHM6c3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9