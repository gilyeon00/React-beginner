import React from 'react';
import { useState, useEffect } from 'react';
import Pagenation from './Pagenation'
import axios from 'axios';
import './list.css'

const ListTotal = () => {

    const[ lists, setLists] = useState([]);

    // useEffect( () => {
    //     const response = axios.get('https://jsonplaceholder.typicode.com/posts')
    //     setLists(response.data)
    //     console.log(response.data)
    // }, [])

    const getList = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setLists(response.data)
        console.log(response.data)
    }

    useEffect( () => {
        getList();
    }, [])

    return (
        <div>
            <ul>
            {
                lists.map( (item) => {
                    return (
                        <li key={item.id}>
                            <span className='list-title'>{item.title}</span>
                            <span className='list-body'>{item.body}</span>
                        </li>   
                    )
                })
            }
            </ul>
        </div>
    );
};

export default ListTotal;