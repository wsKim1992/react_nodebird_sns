import { HYDRATE } from "next-redux-wrapper";
import user from './user';
import post from './post';
import { combineReducers } from "redux";

//combineReducers 통해서 정의되어진 reducer들 합침
//index reducer은 serverside rendering 을 위해
//구현되어진 HYDRATE 를 적용하기 위해 정의하였음..
const rootReducer = combineReducers({
    index:(state={},action)=>{
        switch(action.type){
            case HYDRATE:
                return {...state,...action.payload};
            
            default:
                return state;
        }
    },
    user,
    post,
})

export default rootReducer; 