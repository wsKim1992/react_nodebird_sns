module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\USER\\Desktop\\study\\nodebird_sns\\front\\pages\\_app.js";
//페이지들의 공통적인 요소들을 처리함
//같은 디렉토리 내부에 있는 페이지들 (index,profile,signup)을
//공통적으로 동작하게 함.
//사실상 부모 요소인 샘..



 //next 에서 자체적으로 제공하는 
//html head 요소.





const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      children: "\uACF5\uD1B5 \uBA54\uB274"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 //combineReducers 통해서 정의되어진 reducer들 합침
//index reducer은 serverside rendering 을 위해
//구현되어진 HYDRATE 를 적용하기 위해 정의하였음..

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const generateDummyPost = number => Array(number).fill().map((v, i) => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }]
}));
/* initialState.mainPosts=initialState.mainPosts.concat(
    generateDummyPost(10)
) */

const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'wooseokKim'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'wooseokKim'
  }
});

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_FAILURE, LOG_OUT_SUCCESS, SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_SUCCESS, FOLLOW_REQUEST, FOLLOW_FAILURE, FOLLOW_SUCCESS, UNFOLLOW_REQUEST, UNFOLLOW_FAILURE, UNFOLLOW_SUCCESS, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginAction, loginRequestAction, loginSuccessAction, loginFailureAction, logoutRequestAction, logoutSuccessAction, logoutRequestFailure, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
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
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
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
}); //action creator


const loginAction = data => {
  return (dispatch, getState) => {
    dispatch(loginRequestAction());
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/login').then(res => {
      dispatch(loginSuccessAction(res.data));
    }).catch(err => {
      dispatch(loginFailureAction(err));
    });
  };
};
const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const loginSuccessAction = data => {
  return {
    type: LOG_IN_SUCCESS,
    data
  };
};
const loginFailureAction = data => {
  return {
    type: LOG_IN_FAILURE,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};
const logoutSuccessAction = () => {
  return {
    type: LOG_OUT_SUCCESS
  };
};
const logoutRequestFailure = () => {
  return {
    type: LOG_OUT_FAILURE
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true, draft.unfollowError = null, draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
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
        draft.me.Posts.filter(v => v.id !== action.data);
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

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");


 // rootSaga에 비동기 액션들을 넣어준다.

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_4__);






function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);
}

function* addPost(action) {
  try {
    //const result = yield call(addPostAPI,action.data);
    console.log(action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_4___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/api/post/${data.postId}/commnet`, data);
}

function* addComment(action) {
  try {
    //const result = yield call(addPostAPI,action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);
}

function* removePost(action) {
  try {
    //const result = yield call(addPostAPI,action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post', data);
}

function* loadPosts(action) {
  try {
    //const result = yield call(loadPostsAPI,action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


 //logInAPI 함수 호출. generator이 아님. 

function logInAPI(data) {
  //서버에 요청전송
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);
}

function* logIn(action) {
  try {
    console.log('saga login'); //const result = yield call(logInAPI,action.data);
    //logInAPI 함수의 반환값을 받는다.
    //call 을 통해 logInAPI 함수를 매개변수 action.data으로 지정하여
    //호출하고 반환받는다.

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(2000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
} //logInAPI 함수 호출. generator이 아님. 


function logOutAPI() {
  //서버에 요청전송
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');
}

function* logOut() {
  try {
    //const result = yield call(logOutAPI);//logInAPI 함수의 반환갑을 받는다.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI() {
  //서버에 요청전송
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signUp');
}

function* signUp() {
  try {
    //const result = yield call(logOutAPI);//logInAPI 함수의 반환갑을 받는다.
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI() {
  //서버에 요청전송
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signUp');
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"]
    });
  }
}

function unFollowAPI() {
  //서버에 요청전송
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/signUp');
}

function* unFollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"]
    });
  }
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut); //LOG_IN action 이 실행 될 때 까지 기다리겠다.
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware]; //middleware 배열에 이후에 redux saga 나 thunk 같은 middle들을 
  //적용할 떄 삽입해준다.
  //compose 함수에 applyMiddleware 은 미들웨어 배열의 전개형태를 받는다.
  //단순 array 를 받으면 error이 뜬다!!

  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJ2IiwiaSIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwiZmluZCIsInBvc3RJZCIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfRkFJTFVSRSIsIkxPR19PVVRfU1VDQ0VTUyIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfRkFJTFVSRSIsIlNJR05fVVBfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX0ZBSUxVUkUiLCJGT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpbkFjdGlvbiIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJjYXRjaCIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwibG9nb3V0UmVxdWVzdEZhaWx1cmUiLCJwdXNoIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImFkZFBvc3RBUEkiLCJjb25zb2xlIiwibG9nIiwiZGVsYXkiLCJwdXQiLCJyZXNwb25zZSIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJhZGRDb21tZW50QVBJIiwid2F0Y2hBZGRDb21tZW50IiwicmVtb3ZlUG9zdEFQSSIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsInNpZ25VcEFQSSIsInNpZ25VcCIsImZvbGxvd0FQSSIsImZvbGxvdyIsInVuRm9sbG93QVBJIiwidW5Gb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsImxvZ2dlck1pZGRsZXdhcmUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvL+2OmOydtOyngOuTpOydmCDqs7XthrXsoIHsnbgg7JqU7IaM65Ok7J2EIOyymOumrO2VqFxyXG4vL+qwmeydgCDrlJTroInthqDrpqwg64K067aA7JeQIOyeiOuKlCDtjpjsnbTsp4Drk6QgKGluZGV4LHByb2ZpbGUsc2lnbnVwKeydhFxyXG4vL+qzte2GteyggeycvOuhnCDrj5nsnpHtlZjqsowg7ZWoLlxyXG4vL+yCrOyLpOyDgSDrtoDrqqgg7JqU7IaM7J24IOyDmC4uXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnOy8vbmV4dCDsl5DshJwg7J6Q7LK07KCB7Jy866GcIOygnOqzte2VmOuKlCBcclxuLy9odG1sIGhlYWQg7JqU7IaMLlxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbmNvbnN0IE5vZGVCaXJkPSh7Q29tcG9uZW50fSk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdj7qs7XthrUg66mU64m0PC9kaXY+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzPXtcclxuICAgIENvbXBvbmVudDpQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5cclxuLy9jb21iaW5lUmVkdWNlcnMg7Ya17ZW07IScIOygleydmOuQmOyWtOynhCByZWR1Y2Vy65OkIO2Vqey5qFxyXG4vL2luZGV4IHJlZHVjZXLsnYAgc2VydmVyc2lkZSByZW5kZXJpbmcg7J2EIOychO2VtFxyXG4vL+q1rO2YhOuQmOyWtOynhCBIWURSQVRFIOulvCDsoIHsmqntlZjquLAg7JyE7ZW0IOygleydmO2VmOyYgOydjC4uXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGluZGV4OihzdGF0ZT17fSxhY3Rpb24pPT57XHJcbiAgICAgICAgc3dpdGNoKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwuLi5hY3Rpb24ucGF5bG9hZH07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyAiLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICBtYWluUG9zdHM6W10sXHJcbiAgICBpbWFnZVBhdGhzOltdLFxyXG4gICAgaGFzTW9yZVBvc3RzOnRydWUsXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTpmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOm51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOmZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOm51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzpmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOmZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOm51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzpmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOmZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOm51bGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdD0obnVtYmVyKT0+QXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCh2LGkpPT4oe1xyXG4gICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6c2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOmZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OmZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOlt7XHJcbiAgICAgICAgc3JjOmZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOlt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6ZmFrZXIubmFtZS5maW5kTmFtZSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OmZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxufSkpXHJcblxyXG4vKiBpbml0aWFsU3RhdGUubWFpblBvc3RzPWluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxyXG4gICAgZ2VuZXJhdGVEdW1teVBvc3QoMTApXHJcbikgKi9cclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOkFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudD0oZGF0YSk9Pih7XHJcbiAgICB0eXBlOkFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSk9Pih7XHJcbiAgICBpZDpkYXRhLmlkLFxyXG4gICAgY29udGVudDpkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOid3b29zZW9rS2ltJ1xyXG4gICAgfSxcclxuICAgIEltYWdlczpbXSxcclxuICAgIENvbW1lbnRzOltdLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50PShkYXRhKT0+KHtcclxuICAgIGlkOnNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6ZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgbmlja25hbWU6J3dvb3Nlb2tLaW0nXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlPWluaXRpYWxTdGF0ZSxhY3Rpb24pPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZSAoc3RhdGUsKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmU9dHJ1ZTsgICAgXHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHM9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzPWRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGg8NTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZT0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9bnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lPXRydWU7ICAgIFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZT1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cz1kcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yPW51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KT0+di5pZD09PWFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdCA6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZT17XHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6ZmFsc2UsXHJcbiAgICB1bmZvbGxvd0RvbmU6ZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOm51bGwsXHJcbiAgICBmb2xsb3dMb2FkaW5nOmZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTpmYWxzZSxcclxuICAgIGZvbGxvd0Vycm9yOm51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6ZmFsc2UsXHJcbiAgICBsb2dJbkRvbmU6ZmFsc2UsXHJcbiAgICBsb2dJbkVycm9yOm51bGwsXHJcbiAgICBsb2dPdXRMb2FkaW5nOmZhbHNlLFxyXG4gICAgbG9nT3V0RG9uZTpmYWxzZSxcclxuICAgIGxvZ091dEVycm9yOm51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOmZhbHNlLFxyXG4gICAgc2lnblVwRG9uZTpmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOm51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6ZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGwsXHJcbiAgICBtZTpudWxsLFxyXG4gICAgc2lnblVwRGF0YTp7fSxcclxuICAgIGxvZ2luRGF0YTp7fVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1Q9J0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRT0nUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpPT4oe1xyXG4gICAgLi4uZGF0YSxuaWNrbmFtZTonRG50anJLaW0nLFxyXG4gICAgaWQ6MSxQb3N0czpbe2lkOjF9XSxcclxuICAgIEZvbGxvd2luZ3M6W3tuaWNrbmFtZTon67aA6riw7LSIJ30se25pY2tuYW1lOifrtoDquLDstIgnfSx7bmlja25hbWU6J+u2gOq4sOy0iCd9XSxcclxuICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lOifrtoDquLDstIgnfSx7bmlja25hbWU6J+u2gOq4sOy0iCd9LHtuaWNrbmFtZTon67aA6riw7LSIJ31dXHJcbn0pXHJcblxyXG4vL2FjdGlvbiBjcmVhdG9yXHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCxnZXRTdGF0ZSk9PntcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2xvZ2luJylcclxuICAgICAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24ocmVzLmRhdGEpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gKGRhdGEpPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fU1VDQ0VTUyxkYXRhXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb24gPSAoZGF0YSk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9GQUlMVVJFLGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9SRVFVRVNUXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKCk9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfU1VDQ0VTU1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEZhaWx1cmUgPSAoKT0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9GQUlMVVJFXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGU9aW5pdGlhbFN0YXRlLGFjdGlvbik9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLChkcmFmdCk9PntcclxuICAgICAgICBzd2l0Y2goYWN0aW9uLnR5cGUpe1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3I9bnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT1mYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3I9bnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9ZmFsc2UgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7aWQ6YWN0aW9uLmRhdGF9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9bnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZT1mYWxzZSAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lPWR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3I9YWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz10cnVlLFxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3I9bnVsbCxcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmU9ZmFsc2UgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZT1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yPWFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZz10cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj1udWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvcj1hY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoe2lkOmFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8qIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBtZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0czpbe2lkOmFjdGlvbi5kYXRhfSwuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KT0+di5pZCE9PWFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLyogcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lOntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzOnN0YXRlLm1lLlBvc3RzLmZpbHRlcigodik9PnYuaWQhPT1hY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7IiwiaW1wb3J0IHthbGwsZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5cclxuXHJcbi8vIHJvb3RTYWdh7JeQIOu5hOuPmeq4sCDslaHshZjrk6TsnYQg64Sj7Ja07KSA64ukLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSlcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2FsbCxmb3JrLHB1dCx0YWtlTGF0ZXN0LGRlbGF5LHRocm90dGxlfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge0FERF9QT1NUX1JFUVVFU1QsQUREX1BPU1RfU1VDQ0VTUyxBRERfUE9TVF9GQUlMVVJFXHJcbiAgICAsQUREX0NPTU1FTlRfUkVRVUVTVCxBRERfQ09NTUVOVF9TVUNDRVNTLEFERF9DT01NRU5UX0ZBSUxVUkVcclxuICAgICxSRU1PVkVfUE9TVF9SRVFVRVNULFJFTU9WRV9QT1NUX1NVQ0NFU1MsUkVNT1ZFX1BPU1RfRkFJTFVSRVxyXG4gICAgLExPQURfUE9TVFNfUkVRVUVTVCxMT0FEX1BPU1RTX1NVQ0NFU1MsTE9BRF9QT1NUU19GQUlMVVJFLGdlbmVyYXRlRHVtbXlQb3N0fSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6e2lkLGNvbnRlbnQ6YWN0aW9uLmRhdGF9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULGFkZFBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tbmV0YCxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCxhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCxyZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTpnZW5lcmF0ZUR1bW15UG9zdCgxMClcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCl7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSgyMDAwLExPQURfUE9TVFNfUkVRVUVTVCxsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHthbGwsZm9yayxwdXQsdGFrZUxhdGVzdCxkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtMT0dfSU5fUkVRVUVTVCxMT0dfSU5fU1VDQ0VTUyxMT0dfSU5fRkFJTFVSRVxyXG4gICAgLExPR19PVVRfUkVRVUVTVCxMT0dfT1VUX1NVQ0NFU1MsTE9HX09VVF9GQUlMVVJFXHJcbiAgICAsU0lHTl9VUF9SRVFVRVNULFNJR05fVVBfU1VDQ0VTUyxTSUdOX1VQX0ZBSUxVUkVcclxuICAgICxGT0xMT1dfUkVRVUVTVCAsRk9MTE9XX1NVQ0NFU1MsIEZPTExPV19GQUlMVVJFXHJcbiAgICAsVU5GT0xMT1dfUkVRVUVTVCxVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJ1xyXG4vL2xvZ0luQVBJIO2VqOyImCDtmLjstpwuIGdlbmVyYXRvcuydtCDslYTri5guIFxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKXtcclxuICAgIC8v7ISc67KE7JeQIOyalOyyreyghOyGoVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvZ2luJyk7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAvL2xvZ0luQVBJIO2VqOyImOydmCDrsJjtmZjqsJLsnYQg67Cb64qU64ukLlxyXG4gICAgICAgIC8vY2FsbCDsnYQg7Ya17ZW0IGxvZ0luQVBJIO2VqOyImOulvCDrp6TqsJzrs4DsiJggYWN0aW9uLmRhdGHsnLzroZwg7KeA7KCV7ZWY7JesXHJcbiAgICAgICAgLy/tmLjstpztlZjqs6Ag67CY7ZmY67Cb64qU64ukLlxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDIwMDApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vbG9nSW5BUEkg7ZWo7IiYIO2YuOy2nC4gZ2VuZXJhdG9y7J20IOyVhOuLmC4gXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpe1xyXG4gICAgLy/shJzrsoTsl5Ag7JqU7LKt7KCE7IahXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7Ly9sb2dJbkFQSSDtlajsiJjsnZgg67CY7ZmY6rCR7J2EIOuwm+uKlOuLpC5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkxPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpe1xyXG4gICAgLy/shJzrsoTsl5Ag7JqU7LKt7KCE7IahXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWduVXAnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKCl7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7Ly9sb2dJbkFQSSDtlajsiJjsnZgg67CY7ZmY6rCR7J2EIOuwm+uKlOuLpC5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpe1xyXG4gICAgLy/shJzrsoTsl5Ag7JqU7LKt7KCE7IahXHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWduVXAnKVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTphY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkZPTExPV19GQUlMVVJFXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5Gb2xsb3dBUEkoKXtcclxuICAgIC8v7ISc67KE7JeQIOyalOyyreyghOyGoVxyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnblVwJylcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuRm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfRkFJTFVSRVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCxsb2dPdXQpO1xyXG4gICAgLy9MT0dfSU4gYWN0aW9uIOydtCDsi6Ttlokg65CgIOuVjCDquYzsp4Ag6riw64uk66as6rKg64ukLlxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULHNpZ25VcCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCxmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULHVuRm9sbG93KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLGNvbXBvc2UsIGNyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2gsZ2V0U3RhdGV9KT0+KG5leHQpPT4oYWN0aW9uKT0+e1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCk9PntcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gICAgLy9taWRkbGV3YXJlIOuwsOyXtOyXkCDsnbTtm4Tsl5AgcmVkdXggc2FnYSDrgpggdGh1bmsg6rCZ7J2AIG1pZGRsZeuTpOydhCBcclxuICAgIC8v7KCB7Jqp7ZWgIOuWhCDsgr3snoXtlbTspIDri6QuXHJcbiAgICAvL2NvbXBvc2Ug7ZWo7IiY7JeQIGFwcGx5TWlkZGxld2FyZSDsnYAg66+465Ok7Juo7Ja0IOuwsOyXtOydmCDsoITqsJztmJXtg5zrpbwg67Cb64qU64ukLlxyXG4gICAgLy/ri6jsiJwgYXJyYXkg66W8IOuwm+ycvOuptCBlcnJvcuydtCDrnKzri6QhIVxyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdwcm9kdWN0aW9uJ1xyXG4gICAgP2NvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDpjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx7XHJcbiAgICBkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=