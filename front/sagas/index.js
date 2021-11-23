import {all,fork} from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';


// rootSaga에 비동기 액션들을 넣어준다.
export default function* rootSaga(){
    yield all([
        fork(postSaga),
        fork(userSaga)
    ])
}