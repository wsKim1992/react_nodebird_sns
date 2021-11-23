import {createWrapper} from 'next-redux-wrapper';
import {applyMiddleware,compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({dispatch,getState})=>(next)=>(action)=>{
    console.log(action);
    return next(action);
}

const configureStore = ()=>{
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware,loggerMiddleware];
    //middleware 배열에 이후에 redux saga 나 thunk 같은 middle들을 
    //적용할 떄 삽입해준다.
    //compose 함수에 applyMiddleware 은 미들웨어 배열의 전개형태를 받는다.
    //단순 array 를 받으면 error이 뜬다!!
    const enhancer = process.env.NODE_ENV==='production'
    ?compose(applyMiddleware(...middlewares))
    :composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer,enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store;
};

const wrapper = createWrapper(configureStore,{
    debug:process.env.NODE_ENV==='development',
});

export default wrapper;