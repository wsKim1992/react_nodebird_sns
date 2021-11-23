import React,{useState,useCallback,useMemo} from "react";
import {Form,Input,Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from "../hooks/useInput";
import { loginRequestAction} from "../reducers/user";
import { useDispatch,useSelector } from "react-redux";
// styled component 를 import 해서 
//styled.(컴포넌트)` css 로 지정 `
// 이런 방식으로 line css 를 지정해준다,
const ButtonWrapper = styled.div`
    margin-top:10px;
`
const FormWrapper = styled(Form)`
    padding:10px;
`
const LoginForm = ()=>{
    const dispatch = useDispatch();
    const {logInLoading}=useSelector((state)=>state.user);
    const [email,onChangeEmail]=useInput('');
    const [password,onChangePassword]=useInput('');
    const style = useMemo(()=>({marginTop:10}),[])
    //return 부분은 virtual-dom
    //리렌더링 될 때 virtual-dom 에서 변경사항을 점검한 뒤
    // 달라진 부분만 다시 그려줌. 

    const onSubmitForm = useCallback((e)=>{
        //ant-design 의 onFinish 에선 e.preventDefault 가 이미 적용되어 있음..
        dispatch(loginRequestAction({email,password}));
    },[email,password])

    return(
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br/>
                <Input id="user-email" 
                    name="user-email" 
                    type="email"
                    onChange={onChangeEmail} 
                    required value={email}/>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input id="user-password"
                    type="password" 
                    name="user-password" 
                    onChange={onChangePassword} 
                    required/>
            </div>
            <ButtonWrapper style={style}>
                <Button type="primary" htmlType="submit" loading={logInLoading}>
                    로그인
                </Button>
                <Link href="./signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default LoginForm;