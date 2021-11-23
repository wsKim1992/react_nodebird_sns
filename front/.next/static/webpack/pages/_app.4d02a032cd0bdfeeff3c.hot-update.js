webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_5__);


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addPost),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddPost),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(addComment),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchAddComment),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(removePost),
    _marked6 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchRemovePost),
    _marked7 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(loadPosts),
    _marked8 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLoadPosts),
    _marked9 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(postSaga);







function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data);
}

function addPost(action) {
  var id;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addPost$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          //const result = yield call(addPostAPI,action.data);
          console.log(action.data);
          _context.next = 4;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 4:
          id = shortid__WEBPACK_IMPORTED_MODULE_5___default.a.generate();
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
            data: {
              id: id,
              content: action.data
            }
          });

        case 7:
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
            data: id
          });

        case 9:
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          _context.next = 15;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
            data: _context.t0.response.data
          });

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 11]]);
}

function watchAddPost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/api/post/".concat(data.postId, "/commnet"), data);
}

function addComment(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function addComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context3.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
            data: action.data
          });

        case 5:
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
            data: _context3.t0.response.data
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function watchAddComment() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchAddComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data);
}

function removePost(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function removePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
            data: action.data
          });

        case 5:
          _context5.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 7:
          _context5.next = 13;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 13;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
            data: _context5.t0.response.data
          });

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 9]]);
}

function watchRemovePost() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchRemovePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/post', data);
}

function loadPosts(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function loadPosts$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context7.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_SUCCESS"],
            data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
          });

        case 5:
          _context7.next = 11;
          break;

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_FAILURE"],
            data: _context7.t0.response.data
          });

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 7]]);
}

function watchLoadPosts() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLoadPosts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return throttle(2000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function postSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function postSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJhZGRQb3N0Iiwid2F0Y2hBZGRQb3N0IiwiYWRkQ29tbWVudCIsIndhdGNoQWRkQ29tbWVudCIsInJlbW92ZVBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJsb2FkUG9zdHMiLCJ3YXRjaExvYWRQb3N0cyIsInBvc3RTYWdhIiwiYWRkUG9zdEFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwiZGVsYXkiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInB1dCIsInR5cGUiLCJBRERfUE9TVF9TVUNDRVNTIiwiY29udGVudCIsIkFERF9QT1NUX1RPX01FIiwiQUREX1BPU1RfRkFJTFVSRSIsInJlc3BvbnNlIiwidGFrZUxhdGVzdCIsIkFERF9QT1NUX1JFUVVFU1QiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwicmVtb3ZlUG9zdEFQSSIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwibG9hZFBvc3RzQVBJIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJ0aHJvdHRsZSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQWFVQSxPO21HQXNCQUMsWTttR0FRQUMsVTttR0FlQUMsZTttR0FRQUMsVTttR0FvQkFDLGU7bUdBUUFDLFM7bUdBZ0JBQyxjO21HQUllQyxROztBQWxIekI7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQSxTQUFTQyxVQUFULENBQW9CQyxJQUFw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REo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSWUsU0FBVUUsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxpQkFBTXFDLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQzdDLFlBQUQsQ0FERSxFQUVONkMsK0RBQUksQ0FBQ3ZDLGNBQUQsQ0FGRSxFQUdOdUMsK0RBQUksQ0FBQ3pDLGVBQUQsQ0FIRSxFQUlOeUMsK0RBQUksQ0FBQzNDLGVBQUQsQ0FKRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZDAyYTAzMmNkMGJkZmVlZmYzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsZm9yayxwdXQsdGFrZUxhdGVzdCxkZWxheX0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtBRERfUE9TVF9SRVFVRVNULEFERF9QT1NUX1NVQ0NFU1MsQUREX1BPU1RfRkFJTFVSRVxyXG4gICAgLEFERF9DT01NRU5UX1JFUVVFU1QsQUREX0NPTU1FTlRfU1VDQ0VTUyxBRERfQ09NTUVOVF9GQUlMVVJFXHJcbiAgICAsUkVNT1ZFX1BPU1RfUkVRVUVTVCxSRU1PVkVfUE9TVF9TVUNDRVNTLFJFTU9WRV9QT1NUX0ZBSUxVUkVcclxuICAgICxMT0FEX1BPU1RTX1JFUVVFU1QsTE9BRF9QT1NUU19TVUNDRVNTLExPQURfUE9TVFNfRkFJTFVSRSxnZW5lcmF0ZUR1bW15UG9zdH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIC8vY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOntpZCxjb250ZW50OmFjdGlvbi5kYXRhfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTppZCxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCxhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbW5ldGAsZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTphY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6ZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JyxkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICAvL2NvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTplcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QscmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnLGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgLy9jb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSxhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6Z2VuZXJhdGVEdW1teVBvc3QoMTApXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6TE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOmVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpe1xyXG4gICAgeWllbGQgdGhyb3R0bGUoMjAwMCxMT0FEX1BPU1RTX1JFUVVFU1QsbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSlcclxufSJdLCJzb3VyY2VSb290IjoiIn0=