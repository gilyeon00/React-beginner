import React from 'react';
import TodoList from '../TodoList'
import TodoAddBtn from '../TodoAddBtn'
import './index.css'

const TodoTitleArea = ({todos, setSelectTodoIndex, addTodo, delTodo, selectTodoIndex}) => {
    return (
        <div className='TitleArea'>
            <h1>연길's Planner</h1>
            <TodoList 
                todos = {todos} 
                setSelectTodoIndex={setSelectTodoIndex}
                delTodo={delTodo}
                selectTodoIndex={selectTodoIndex} />
            <TodoAddBtn onClick={addTodo}/>
        </div>
    );
};

export default TodoTitleArea;