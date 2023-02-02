import React from 'react';

const TodoItem = ({children, onClick, onClickDel}) => {
    return (
        <div onClick={onClick} >
            {children}
            <button onClick={onClickDel}> Del - </button>
        </div>
    );
};

export default TodoItem;