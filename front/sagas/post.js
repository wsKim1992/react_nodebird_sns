import {all,fork,put,takeLatest,delay,throttle} from 'redux-saga/effects';
import axios from 'axios';
import {ADD_POST_REQUEST,ADD_POST_SUCCESS,ADD_POST_FAILURE
    ,ADD_COMMENT_REQUEST,ADD_COMMENT_SUCCESS,ADD_COMMENT_FAILURE
    ,REMOVE_POST_REQUEST,REMOVE_POST_SUCCESS,REMOVE_POST_FAILURE
    ,LOAD_POSTS_REQUEST,LOAD_POSTS_SUCCESS,LOAD_POSTS_FAILURE,generateDummyPost} from '../reducers/post';
import { ADD_POST_TO_ME,REMOVE_POST_OF_ME } from '../reducers/user';
import shortId from 'shortid';

function addPostAPI(data){
    return axios.post('/api/post',data);
}

function* addPost(action){
    try{
        //const result = yield call(addPostAPI,action.data);
        console.log(action.data);
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type:ADD_POST_SUCCESS,
            data:{id,content:action.data}
        })
        yield put({
            type:ADD_POST_TO_ME,
            data:id,
        })
    }catch(err){
        yield put({
            type:ADD_POST_FAILURE,
            data:err.response.data,
        })
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST,addPost);
}

function addCommentAPI(data){
    return axios.post(`/api/post/${data.postId}/commnet`,data);
}

function* addComment(action){
    try{
        //const result = yield call(addPostAPI,action.data);
        yield delay(1000);
        yield put({
            type:ADD_COMMENT_SUCCESS,
            data:action.data
        })
    }catch(err){
        yield put({
            type:ADD_COMMENT_FAILURE,
            data:err.response.data,
        })
    }
}
function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST,addComment);
}

function removePostAPI(data){
    return axios.post('/api/post',data);
}

function* removePost(action){
    try{
        //const result = yield call(addPostAPI,action.data);
        yield delay(1000);
        yield put({
            type:REMOVE_POST_SUCCESS,
            data:action.data
        })
        yield put({
            type:REMOVE_POST_OF_ME,
            data:action.data
        })
    }catch(err){
        yield put({
            type:REMOVE_POST_FAILURE,
            data:err.response.data,
        })
    }
}

function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST,removePost);
}

function loadPostsAPI(data){
    return axios.post('/api/post',data);
}

function* loadPosts(action){
    try{
        //const result = yield call(loadPostsAPI,action.data);
        yield delay(1000);
        yield put({
            type:LOAD_POSTS_SUCCESS,
            data:generateDummyPost(10)
        })
    }catch(err){
        yield put({
            type:LOAD_POSTS_FAILURE,
            data:err.response.data,
        })
    }
}

function* watchLoadPosts(){
    yield throttle(2000,LOAD_POSTS_REQUEST,loadPosts);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}