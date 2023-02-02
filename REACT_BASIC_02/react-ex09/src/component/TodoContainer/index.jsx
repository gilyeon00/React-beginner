import React from 'react';
import './index.css'

const TodoContainer = ({todo, setTodo}) => {
    if(todo === undefined){
        return (
            <div className='NothingNoticeBox'>
                <h1>선택된 todo 리스트가 없습니다.</h1>
                <h2>할 일을 추가해보세요🐹</h2>
            </div>
        )
    }
    return (
        <div className='TodoContainer'>
            <div>
                <input
                // input에 글을쓰면 (=change가되면) setTodo를 통해 들어감
                    type="text"
                    className='TodoTitle'
                    value={todo.title}
                    onChange={ (e)=> {
                        setTodo({
                            ...todo, // 해당정보 유지시키고, 기존 정보에 추가할 수 있도록
                            title:e.target.value
                        })
                    }} />
            </div>
            <div>
                <textarea className='TodoContent' value={todo.content}
                    onChange={(e)=> {
                        setTodo({
                            ...todo,
                            content:e.target.value
                        })
                    }}/>
            </div>
        </div>
    );
};

export default TodoContainer;