import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({todos, setSelectTodoIndex, delTodo}) => {
    return (
        <div>
            {
                todos.map( (todo, index) => {
                    console.log(index)
                    return (
                        <TodoItem key={index} index={index}
                            onClick= { ()=>{
                                setSelectTodoIndex(index)
                            }}
                            onClickDel = { (e) => {
                                e.preventDefault();     // del버튼 누를때 타고 올라가서 다른게 적용되지 않도록
                                e.stopPropagation();
                                delTodo(index);
                            }} 
                            >
                            {todo.title}   {/* onClick도 props임 이벤트를 보내줬다가 아니라 함수자체를 내려줌 -> onclick이벤트가 아니기때문에 onClick이 아니라 이름을 바꿔줘도됨 */}
                        </TodoItem>
                    )

                })
            }
        </div>
    );
};

export default TodoList;