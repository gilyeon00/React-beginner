import React from 'react';

const TodoItem = ({children}) => {
    return (
        <div>
            {children}
            <button> Del - </button>
        </div>
    );
};

export default TodoItem;