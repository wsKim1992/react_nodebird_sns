import React,{useCallback,useEffect,useRef} from 'react';
import {Form, Input,Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../reducers/post';
import useInput from '../hooks/useInput';

const PostForm = ()=>{
    const {imagePaths,addPostDone} = useSelector((state)=>state.post);
    const dispatch = useDispatch();
    const [text,onChangeText,setText]=useInput('');

    useEffect(()=>{
        if(addPostDone){
            setText('');
        }
    },[addPostDone])

    const onSubmit=useCallback(() => {
        console.log("calling addpost dispatch");
        dispatch(addPost(text));
    },[text])

    const imageInput=useRef(null);
    const onClickImgUpload = useCallback(() => {
        imageInput.current.click();
    },[imageInput.current])
    return(
        <Form style={{margin:'10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea
                value={text}
                onChange={onChangeText}
                maxLength={140}
                placeholder="무슨 재미난 일이 있었나요"
            />
            <div>
                <input type="file" multiple hidden ref={imageInput}/>
                <Button onClick={onClickImgUpload}>이미지 업로드</Button>
                <Button 
                    type="primary"
                    style={{float:'right'}} 
                    htmlType="submit">
                        짹짹
                </Button>
            </div>
            <div>
                {imagePaths.map((v)=>(
                    <div key={v} style={{display:'inline-block'}}>
                        <img src={v} style={{width:'200px'}} alt={v}/>
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                ))}
            </div>
        </Form>
    )
}

export default PostForm;