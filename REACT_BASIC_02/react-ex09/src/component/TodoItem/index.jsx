import React from 'react';
import './index.css'

const TodoItem = ({children, onClick, onClickDel}) => {
    return (
        <div className='TodoItem' onClick={onClick} >
            {children}
            <button className='TodoDelBtn' onClick={onClickDel}> Del - </button>
        </div>
    );
};

export default TodoItem;