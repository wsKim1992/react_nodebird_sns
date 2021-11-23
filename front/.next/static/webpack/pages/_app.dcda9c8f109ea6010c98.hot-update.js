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
      case FOLLOW_REQUEST:
        draft.logInLoading = true, draft.logInError = null, draft.logInDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;

      case FOLLOW_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luQWN0aW9uIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsInR5cGUiLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibG9nb3V0U3VjY2Vzc0FjdGlvbiIsImxvZ291dFJlcXVlc3RGYWlsdXJlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxZQUFZLEdBQUM7QUFDdEJDLGVBQWEsRUFBQyxLQURRO0FBRXRCQyxZQUFVLEVBQUMsS0FGVztBQUd0QkMsYUFBVyxFQUFDLElBSFU7QUFJdEJDLGNBQVksRUFBQyxLQUpTO0FBS3RCQyxXQUFTLEVBQUMsS0FMWTtBQU10QkMsWUFBVSxFQUFDLElBTlc7QUFPdEJDLGVBQWEsRUFBQyxLQVBRO0FBUXRCQyxZQUFVLEVBQUMsS0FSVztBQVN0QkMsYUFBVyxFQUFDLElBVFU7QUFVdEJDLGVBQWEsRUFBQyxLQVZRO0FBV3RCQyxZQUFVLEVBQUMsS0FYVztBQVl0QkMsYUFBVyxFQUFDLElBWlU7QUFhdEJDLHVCQUFxQixFQUFDLEtBYkE7QUFjdEJDLG9CQUFrQixFQUFDLEtBZEc7QUFldEJDLHFCQUFtQixFQUFDLElBZkU7QUFnQnRCQyxJQUFFLEVBQUMsSUFoQm1CO0FBaUJ0QkMsWUFBVSxFQUFDLEVBakJXO0FBa0J0QkMsV0FBUyxFQUFDO0FBbEJZLENBQW5CO0FBcUJBLElBQU1DLGNBQWMsR0FBQyxnQkFBckI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUVBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxl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ZSx1QkFBTDtBQUNJbUMsYUFBSyxDQUFDcEQscUJBQU4sR0FBNEIsS0FBNUI7QUFDQW9ELGFBQUssQ0FBQ25ELGtCQUFOLEdBQXlCLElBQXpCO0FBQ0E7O0FBQ0osV0FBS2UsdUJBQUw7QUFDSW9DLGFBQUssQ0FBQ3BELHFCQUFOLEdBQTRCLEtBQTVCO0FBQ0FvRCxhQUFLLENBQUNsRCxtQkFBTixHQUEwQmdELE1BQU0sQ0FBQ0csS0FBakM7QUFDQTs7QUFDSixXQUFLN0IsY0FBTDtBQUNJNEIsYUFBSyxDQUFDakQsRUFBTixDQUFTMkIsS0FBVCxDQUFld0IsT0FBZixDQUF1QjtBQUFDekIsWUFBRSxFQUFDcUIsTUFBTSxDQUFDdkI7QUFBWCxTQUF2QjtBQUNBOztBQUNBO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDWSxXQUFLRixpQkFBTDtBQUNJMkIsYUFBSyxDQUFDakQsRUFBTixDQUFTMkIsS0FBVCxDQUFleUIsTUFBZixDQUFzQixVQUFDQyxDQUFEO0FBQUEsaUJBQUtBLENBQUMsQ0FBQzNCLEVBQUYsS0FBT3FCLE1BQU0sQ0FBQ3ZCLElBQW5CO0FBQUEsU0FBdEI7QUFDQTs7QUFDQTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ1k7QUFDSTtBQTFGUjtBQTRGSCxHQTdGYSxDQUFkO0FBOEZILENBL0ZEOztBQWlHZXFCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZGNkYTljOGYxMDllYTYwMTBjOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU9e1xyXG4gICAgZm9sbG93TG9hZGluZzpmYWxzZSxcclxuICAgIGZvbGxvd0RvbmU6ZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjpudWxsLFxyXG4gICAgbG9nSW5Mb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nSW5Eb25lOmZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjpudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzpmYWxzZSxcclxuICAgIGxvZ091dERvbmU6ZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjpudWxsLFxyXG4gICAgc2lnblVwTG9hZGluZzpmYWxzZSxcclxuICAgIHNpZ25VcERvbmU6ZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjpudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOmZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOmZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjpudWxsLFxyXG4gICAgbWU6bnVsbCxcclxuICAgIHNpZ25VcERhdGE6e30sXHJcbiAgICBsb2dpbkRhdGE6e31cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUPSdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUU9J1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKT0+KHtcclxuICAgIC4uLmRhdGEsbmlja25hbWU6J0RudGpyS2ltJyxcclxuICAgIGlkOjEsUG9zdHM6W3tpZDoxfV0sXHJcbiAgICBGb2xsb3dpbmdzOlt7bmlja25hbWU6J+u2gOq4sOy0iCd9LHtuaWNrbmFtZTon67aA6riw7LSIJ30se25pY2tuYW1lOifrtoDquLDstIgnfV0sXHJcbiAgICBGb2xsb3dlcnM6W3tuaWNrbmFtZTon67aA6riw7LSIJ30se25pY2tuYW1lOifrtoDquLDstIgnfSx7bmlja25hbWU6J+u2gOq4sOy0iCd9XVxyXG59KVxyXG5cclxuLy9hY3Rpb24gY3JlYXRvclxyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSk9PntcclxuICAgIHJldHVybiAoZGlzcGF0Y2gsZ2V0U3RhdGUpPT57XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9sb2dpbicpXHJcbiAgICAgICAgLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKHJlcy5kYXRhKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGVycikpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9SRVFVRVNULGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2Vzc0FjdGlvbiA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uID0gKGRhdGEpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fRkFJTFVSRSxkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfUkVRVUVTVFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9ICgpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1NVQ0NFU1NcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RGYWlsdXJlID0gKCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfRkFJTFVSRVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lPWZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9ZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lPWZhbHNlICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWU9ZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPXRydWUsXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvcj1udWxsLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZT1mYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7aWQ6YWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLyogcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzOlt7aWQ6YWN0aW9uLmRhdGF9LC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkIT09YWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvKiByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWU6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdHM6c3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ICovXHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9