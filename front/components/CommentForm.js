import {Form, Input,Button} from 'antd';
import { useCallback,useEffect } from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector,useDispatch } from 'react-redux';
import { addComment } from '../reducers/post';

const CommentForm = ({post})=>{
    const id = useSelector((state)=>state.user.me?.id);
    const{addCommentDone,addCommentLoading} = useSelector((state)=>state.post);
    const [commentText,onChangeCommentText,setCommentText]=useInput('');
    const dispatch = useDispatch();
    useEffect(()=>{
        if(addCommentDone){
            setCommentText('');
        }
    },[addCommentDone])

    const onSubmitComment = useCallback(()=>{
        console.log({content:commentText, postId:post.id,userId:id});
        if(id&&commentText!=='')dispatch(addComment({content:commentText, postId:post.id,userId:id}))
    },[commentText,id]);
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position:'relative',margi:0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
                <Button 
                style={{position:'absolute',right:0,bottom:-40,zIndex:1}} 
                type="primary" 
                htmlType="submit"
                loading={addCommentLoading}
                >삐약</Button>
            </Form.Item>
        </Form>
    );
}

CommentForm.propTypes={
    post:PropTypes.object.isRequired,
}

export default CommentForm;