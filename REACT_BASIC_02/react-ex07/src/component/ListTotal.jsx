import React from 'react';
import { useState, useEffect } from 'react';
import Pagenation from './Pagenation'
import axios from 'axios';
import './list.css'

const ListTotal = () => {

    const[lists, setLists] = useState([]);

    // async / await 사용 안했을 때
    // useEffect( () => {
    //     const response = axios.get('https://jsonplaceholder.typicode.com/posts')
    //     setLists(response.data)
    //     console.log(response.data)
    // }, [])

    // async / await 사용할 때
    const getList = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setLists(response.data)
        //console.log(response.data)
    }

    useEffect( () => {
        getList();
    }, [])


    const [page, setPage] = useState(1);
    const LIST_PER_PAGE = 10;
    const START = (page - 1) * LIST_PER_PAGE;   // 0 10 20 30 ..
    const END = START + LIST_PER_PAGE;      // 10 20 30 40 ..
    // const fncPage = () => {
    //     setPage()
    // }

    return (
        <div>
            <ul>
            {
                // 더 간단히 데이터 가져오기 - key으로 가져오기 (id, title, body)
                // 거꾸로 넣기위해 reverse(), START ~ END까지 slice
                // 데이터를 직접적으로 조작하지 않도록 spread를 이용한다 [...lists] - 까서 새로운 배열 생성
                // 리액트에서 state값이 객체일 경우 상태값을 업데이트시킬 때, spread를 사용해서 기존의 값을 유지시키고 spread한 값을 상태값으로 바꿔준다.
                [...lists].reverse().slice(START, END).map( ({id, title, body}) => {
                    return (
                        <li key={id}>
                            <span className='list-title'>{id}</span>
                            <span className='list-body'>{body}</span>
                        </li>   
                    );
                })
            }
            </ul>   
        </div>
    );
};

export default ListTotal;