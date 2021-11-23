//페이지들의 공통적인 요소들을 처리함
//같은 디렉토리 내부에 있는 페이지들 (index,profile,signup)을
//공통적으로 동작하게 함.
//사실상 부모 요소인 샘..
import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css'
import Head from 'next/head';//next 에서 자체적으로 제공하는 
//html head 요소.
import wrapper from '../store/configureStore';
const NodeBird=({Component})=>{
    return(
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>NodeBird</title>
            </Head>
            <div>공통 메뉴</div>
            <Component/>
        </>
    )
};

NodeBird.propTypes={
    Component:PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(NodeBird);