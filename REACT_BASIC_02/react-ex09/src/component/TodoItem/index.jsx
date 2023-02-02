import React from 'react';

const TodoItem = ({children, onClick}) => {
    return (
        <div onClick={onClick} >
            {children}
            <button> Del - </button>
        </div>
    );
};

export default TodoItem;