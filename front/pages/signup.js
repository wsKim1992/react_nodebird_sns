import React,{useCallback, useState} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {Form, Input,Checkbox,Button} from 'antd';
import useInput from "../hooks/useInput";
import styled from 'styled-components';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch,useSelector } from 'react-redux';

const ErrorMessage=styled.div`
    color:red;
`

const Signup=()=>{
    const dispatch = useDispatch();
    const {signUpLoading} = useSelector((state)=>state.user);
    const [email,onChangeEmail]=useInput('');
    const [nick,onChangeNick]=useInput('');
    const [password,onChangePassword]=useInput('');
    const [passwordCheck,setPasswordCheck]=useState('');
    const [passwordError,setPasswordError]=useState(false);
    const [termError,setTermError]=useState(false);
    const [term,setTerm]=useState('');
    const onChangeTerm = useCallback((e)=>{
        setTerm(e.target.checked);
        setTermError(false);
    },[])

    const onChangePasswordCheck= useCallback((e)=>{
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value!==password);
    },[password]);

    const onSubmit=useCallback((e) => {
        if(password!==passwordCheck){
            return setPasswordCheck(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(email)
        console.log(password);
        console.log(passwordCheck);
        dispatch({
            type:SIGN_UP_REQUEST,
            data:{email,password,nickname}
        });
    },[email,password,passwordCheck,term])

    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish = {onSubmit}>
                <div>
                    <label htmlFor="user-email">아이디</label>
                    <br/>
                    <Input name="user-email" type="email" value={email} required onChange={onChangeEmail}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input type="password" name="user-password" value={password} required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 확인</label>
                    <br/>
                    <Input type="password" name="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck}/>
                    {passwordError &&<ErrorMessage>비밀번호가 일치하지 않습니다</ErrorMessage>}
                </div>
                <div>
                    
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                        윽석쿤이 곧 법이다
                    </Checkbox>
                    {termError &&<ErrorMessage style={{color:'red'}}>약관에 동의하셔야 합니다</ErrorMessage>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
}

export default Signup;