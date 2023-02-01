import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Counter = () => {
    console.log('시작')
    
    useEffect( () => {}, [])

    const [value, setValue] = useState(0);
    const increaseValue = () => {
        setValue(value + 1)
    }

    // useEffect( () => {
    //     console.log("컴포넌트가 마운트될 때 한 번만 !@")
    // }, []) // dependency가 빈 배열로 되어있기 때무넹, 이 컴포넌트는 단 한 번만 렌더링됨

    // 클린업 return 사용 - 컴포넌트가 언마운트될 때 실행됨
    useEffect( () => {
        console.log("컴포넌트가 마운트될 때 한 번만 !@")
        return () => {
            console.log('컴포넌트가 언마운트할 때')
        }
    }, [])

    return (
        <div>
            <h1> 값은 {value}</h1>
            <button onClick={increaseValue}>+증가</button>
            
        </div>
    );
};

export default Counter;