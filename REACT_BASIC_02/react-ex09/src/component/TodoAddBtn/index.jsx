import React from 'react';

const TodoAddBtn = ({onClick}) => {
    return (
        <div>
            <button onClick={onClick}> ADD+ </button>
        </div>
    );
};

export default TodoAddBtn;