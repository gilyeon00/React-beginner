import React from 'react';
import styled from 'styled-components';

const Style = () => {
    return (
        <div>
            <Box>
                <Title fontSize="3rem" color="#def">Styled Component</Title>
                <Title color="#daa">CSS IN JS</Title>
                <Title>스타일드 컴포넌트</Title>
                <Btn borderColor='green'>normal</Btn>
                <Btn borderColor='red'>disabled</Btn>
                <Btn borderColor='yellow'>active</Btn>
                <Btn>2023년 2월 1일</Btn>
                <Text size="20px" color="#ccc">2023년 2월 1일</Text>
                <Text>수요일</Text>
                <Text>오후 3시</Text>
            </Box>
            <Box>

            </Box>
        </div>
    );
};

export default Style;

const Box = styled.div`
    width : 500px;
    height : 900px:
    background-color : rgb(255,242,555);
    border : 2px solid black;
    margin: 1rem;
`

// props 사용
const Title = styled.h2`
    font-size : ${(props) => props.fontSize};
    color: ${(props) => props.color};
    margin : 1rem 0;
`

const Text = styled.p`
    font-size : ${(props) => props.size };
    color : ${(props) => props.color};
`

const Btn = styled.button`
    width: 200px;
    height: 20px;
    border: 1px solid ${(props) => props.borderColor};
    background-color: #fff;

`