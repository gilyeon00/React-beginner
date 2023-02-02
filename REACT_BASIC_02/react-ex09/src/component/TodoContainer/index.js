import React from 'react';

const TodoContainer = ({todo, setTodo}) => {
    return (
        <div className='todo-container'>
            <div>
                <input
                    type="text"
                    className='todo-title'
                    value={todo.title}>
                </input>
            </div>
            <div>
                <textarea />
            </div>
        </div>
    );
};

export default TodoContainer;