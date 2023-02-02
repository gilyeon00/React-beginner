import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({todos}) => {
    return (
        <div>
            {
                todos.map( (todo, index) => {
                    return (
                        <TodoItem key={index} index={index}>
                            {todo.title}
                        </TodoItem>
                    )

                })
            }
        </div>
    );
};

export default TodoList;