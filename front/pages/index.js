import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const Home = ()=>{
    const dispatch = useDispatch();
    const {me}=useSelector((state)=>state.user);
    const {mainPosts,hasMorePosts,loadPostsLoading} = useSelector((state)=>state.post);

    useEffect(()=>{
        dispatch({
            type:LOAD_POSTS_REQUEST
        })
    },[])

    useEffect(()=>{
        function onScroll(){
            /**
             * scrollY : 얼마나 내렸는지
             * clientHeight : 화면 보이는 길이
             * scrollHeight : 총 길이
             */
            if(window.scrollY+document.documentElement.clientHeight>document.documentElement.scrollHeight-300){
                if(hasMorePosts&&!loadPostsLoading){
                    dispatch({type:LOAD_POSTS_REQUEST})
                }
            }
        }
        window.addEventListener('scroll',onScroll);
        return ()=>{
            //메모리 헤제 하기 위해.
            window.removeEventListener('scroll',onScroll);
        }
    },[hasMorePosts,loadPostsLoading])

    return(
        <AppLayout>
            {me&&< PostForm/>}
            {mainPosts.map((post,idx)=><PostCard key={post.id} post={post}/>)}
        </AppLayout>
    )
}

export default Home;