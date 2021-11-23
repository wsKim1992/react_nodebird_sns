webpackHotUpdate_N_E("pages/_app",{

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
        draft.me = dummyUser(action.data);
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
        draft.me = dummyUser(action.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJ1bmZvbGxvd0xvYWRpbmciLCJ1bmZvbGxvd0RvbmUiLCJ1bmZvbGxvd0Vycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfT1VUX1NVQ0NFU1MiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX0ZBSUxVUkUiLCJTSUdOX1VQX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19GQUlMVVJFIiwiRk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1NVQ0NFU1MiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpbkFjdGlvbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJlcnIiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0RmFpbHVyZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFDO0FBQ3RCQyxpQkFBZSxFQUFDLEtBRE07QUFFdEJDLGNBQVksRUFBQyxLQUZTO0FBR3RCQyxlQUFhLEVBQUMsSUFIUTtBQUl0QkMsZUFBYSxFQUFDLEtBSlE7QUFLdEJDLFlBQVUsRUFBQyxLQUxXO0FBTXRCQyxhQUFXLEVBQUMsSUFOVTtBQU90QkMsY0FBWSxFQUFDLEtBUFM7QUFRdEJDLFdBQVMsRUFBQyxLQVJZO0FBU3RCQyxZQUFVLEVBQUMsSUFUVztBQVV0QkMsZUFBYSxFQUFDLEtBVlE7QUFXdEJDLFlBQVUsRUFBQyxLQVhXO0FBWXRCQyxhQUFXLEVBQUMsSUFaVTtBQWF0QkMsZUFBYSxFQUFDLEtBYlE7QUFjdEJDLFlBQVUsRUFBQyxLQWRXO0FBZXRCQyxhQUFXLEVBQUMsSUFmVTtBQWdCdEJDLHVCQUFxQixFQUFDLEtBaEJBO0FBaUJ0QkMsb0JBQWtCLEVBQUMsS0FqQkc7QUFrQnRCQyxxQkFBbUIsRUFBQyxJQWxCRTtBQW1CdEJDLElBQUUsRUFBQyxJQW5CbUI7QUFvQnRCQyxZQUFVLEVBQUMsRUFwQlc7QUFxQnRCQyxXQUFTLEVBQUM7QUFyQlksQ0FBbkI7QUF3QkEsSUFBTUMsY0FBYyxHQUFDLGdCQUFyQjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FB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QixhQUFLLENBQUNqRCxFQUFOLENBQVMyQixLQUFULENBQWV5QixNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxpQkFBS0EsQ0FBQyxDQUFDM0IsRUFBRixLQUFPcUIsTUFBTSxDQUFDdkIsSUFBbkI7QUFBQSxTQUF0QjtBQUNBOztBQUNBO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDWTtBQUNJO0FBeEdSO0FBMEdILEdBM0dhLENBQWQ7QUE0R0gsQ0E3R0Q7O0FBK0dlcUIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40MTJhYjUyNmVjODQyMDNkZTE1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6ZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6ZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOm51bGwsXHJcbiAgICBmb2xsb3dMb2FkaW5nOmZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTpmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOm51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6ZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOm51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTpmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOm51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOm51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6ZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGwsXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1Q9J0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRT0nUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpPT4oe1xyXG4gICAgLi4uZGF0YSxuaWNrbmFtZTonRG50anJLaW0nLFxyXG4gICAgaWQ6MSxQb3N0czpbe2lkOjF9XSxcclxuICAgIEZvbGxvd2luZ3M6W3tuaWNrbmFtZTon67aA6riw7LSIJ30se25pY2tuYW1lOifrtoDquLDstIgnfSx7bmlja25hbWU6J+u2gOq4sOy0iCd9XSxcclxuICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lOifrtoDquLDstIgnfSx7bmlja25hbWU6J+u2gOq4sOy0iCd9LHtuaWNrbmFtZTon67aA6riw7LSIJ31dXHJcbn0pXHJcblxyXG4vL2FjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCxnZXRTdGF0ZSk9PntcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2xvZ2luJylcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gKGRhdGEpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fU1VDQ0VTUyxkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9GQUlMVVJFLGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfU1VDQ0VTU1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEZhaWx1cmUgPSAoKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9GQUlMVVJFXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9bnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT1mYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9ZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3I9bnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9ZmFsc2UgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPWR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lPWZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9ZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPXRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZT1mYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLyogcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzOlt7aWQ6YWN0aW9uLmRhdGF9LC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvKiByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdHM6c3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9