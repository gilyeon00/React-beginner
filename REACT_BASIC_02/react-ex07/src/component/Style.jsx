import React from 'react';
import styled from 'styled-components';

const Style = () => {
    return (
        <div>
            <Box>
                <Title>Styled Component</Title>
                <Title>CSS IN JS</Title>
                <Title>스타일드 컴포넌트</Title>
                <Btn>normal</Btn>
                <Btn>disabled</Btn>
                <Btn>active</Btn>
                <Btn>2023년 2월 1일</Btn>
                <Text>2023년 2월 1일</Text>
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
`

const Btn = styled.button`
`

const Title = styled.h2`
    font-size : 2rem;
    
`

const Text = styled.p`
`