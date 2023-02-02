import React from 'react';

const TodoContainer = ({todo, setTodo}) => {
    return (
        <div className='todo-container'>
            <div>
                <input
                // input에 글을쓰면 (=change가되면) setTodo를 통해 들어감
                    type="text"
                    className='todo-title'
                    value={todo.title}
                    onChange={ (e)=> {
                        setTodo({
                            ...todo, // 해당정보 유지시키고, 기존 정보에 추가할 수 있도록
                            title:e.target.value
                        })
                    }}>
                </input>
            </div>
            <div>
                <textarea value={todo.contents}
                    onChange={(e)=> {
                        setTodo({
                            ...todo,
                            title:e.target.value
                        })
                    }}/>
            </div>
        </div>
    );
};

export default TodoContainer;