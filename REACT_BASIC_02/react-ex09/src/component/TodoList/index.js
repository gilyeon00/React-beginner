import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({todo}) => {
    return (
        <div>
            {
            todo.map( (todo, index) => {
                return (
                    <TodoItem key={index}/>
                )

            })
        }
        </div>
    );
};

export default TodoList;