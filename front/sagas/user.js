import {all,fork,put,takeLatest,delay} from 'redux-saga/effects';
import axios from 'axios';
import {LOG_IN_REQUEST,LOG_IN_SUCCESS,LOG_IN_FAILURE
    ,LOG_OUT_REQUEST,LOG_OUT_SUCCESS,LOG_OUT_FAILURE
    ,SIGN_UP_REQUEST,SIGN_UP_SUCCESS,SIGN_UP_FAILURE
    ,FOLLOW_REQUEST ,FOLLOW_SUCCESS, FOLLOW_FAILURE
    ,UNFOLLOW_REQUEST,UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE} from '../reducers/user'
//logInAPI 함수 호출. generator이 아님. 
function logInAPI(data){
    //서버에 요청전송
    return axios.post('/api/login',data)
}

function* logIn(action){
    try{
        console.log('saga login');
        //const result = yield call(logInAPI,action.data);
        //logInAPI 함수의 반환값을 받는다.
        //call 을 통해 logInAPI 함수를 매개변수 action.data으로 지정하여
        //호출하고 반환받는다.
        yield delay(2000);
        
        yield put({
            type:LOG_IN_SUCCESS,
            data:action.data
        })
    }catch(err){
        yield put({
            type:LOG_IN_FAILURE,
            error:err.response.data,
        })
    }
}


//logInAPI 함수 호출. generator이 아님. 
function logOutAPI(){
    //서버에 요청전송
    return axios.post('/api/logout')
}

function* logOut(){
    try{
        //const result = yield call(logOutAPI);//logInAPI 함수의 반환갑을 받는다.
        yield delay(1000);
        yield put({
            type:LOG_OUT_SUCCESS,
        })
    }catch(err){
        yield put({
            type:LOG_OUT_FAILURE,
            error:err.response.data,
        })
    }
}

function signUpAPI(){
    //서버에 요청전송
    return axios.post('/api/signUp')
}

function* signUp(){
    try{
        //const result = yield call(logOutAPI);//logInAPI 함수의 반환갑을 받는다.
        yield delay(1000);
        yield put({
            type:SIGN_UP_SUCCESS,
        })
    }catch(err){
        yield put({
            type:SIGN_UP_FAILURE,
            error:err.response.data,
        })
    }
}

function followAPI(){
    //서버에 요청전송
    return axios.post('/api/signUp')
}

function* follow(action){
    try{
        yield delay(1000);
        yield put({
            type:FOLLOW_SUCCESS,
            data:action.data
        })
    }catch(err){
        yield put({
            type:FOLLOW_FAILURE
        })
    }
}

function unFollowAPI(){
    //서버에 요청전송
    return axios.post('/api/signUp')
}

function* unFollow(action){
    try{
        yield delay(1000);
        yield put({
            type:UNFOLLOW_SUCCESS,
            data:action.data
        })
    }catch(err){
        yield put({
            type:UNFOLLOW_FAILURE
        })
    }
}

function* watchLogIn(){
    yield takeLatest(LOG_IN_REQUEST,logIn);
}

function* watchLogOut(){
    yield takeLatest(LOG_OUT_REQUEST,logOut);
    //LOG_IN action 이 실행 될 때 까지 기다리겠다.
}

function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST,signUp);
}

function* watchFollow(){
    yield takeLatest(FOLLOW_REQUEST,follow);
}

function* watchUnFollow(){
    yield takeLatest(UNFOLLOW_REQUEST,unFollow);
}

export default function* userSaga(){
    yield all([
        fork(watchFollow),
        fork(watchUnFollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}