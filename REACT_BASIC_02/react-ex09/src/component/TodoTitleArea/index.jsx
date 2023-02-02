import React from 'react';
import TodoList from '../TodoList'
import TodoAddBtn from '../TodoAddBtn'

const TodoTitleArea = ({todos, setSelectTodoIndex}) => {
    return (
        <div className='title-area'>
            <h1>연길's Planner</h1>
            <TodoList todos = {todos} setSelectTodoIndex={setSelectTodoIndex}/>
            <TodoAddBtn/>
        </div>
    );
};

export default TodoTitleArea;