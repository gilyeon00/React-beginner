import React from 'react';
import './index.css'

const TodoItem = ({children, onClick, onClickDel, isSelected}) => {
    return (
        <div onClick={onClick} className={'TodoItem'+ (isSelected ? ' on' : '')} >
            {children}
            <button className='TodoDelBtn' onClick={onClickDel}> Del </button>
        </div>
    );
};

export default TodoItem;