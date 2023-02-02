import React from 'react';
import TodoList from './../TodoList'
import TodoAddBtn from './../TodoAddBtn'

const TodoTitleArea = ({todo}) => {
    return (
        <div className='title-area'>
            <h1>연길's Planner</h1>
            <TodoList todo = {todo}/>
            <TodoAddBtn/>
        </div>
    );
};

export default TodoTitleArea;