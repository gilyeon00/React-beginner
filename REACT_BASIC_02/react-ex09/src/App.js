import './App.css';
import { useState} from 'react'
import TodoTitleArea from './component/TodoTitleArea';
import TodoContainer from './component/TodoContainer';
import { setItem, getItem } from './libs/storage';

function App() {
  const [todos, setTodos] = useState([ getItem('todo') || [] ]);    // 없다면 빈배열 가져옴

  const [selectTodoIndex, setSelectTodoIndex] = useState(0);

  const setTodo = (newTodo) => {
    const newTodos = [...todos];    // 새로운 래퍼런스로 
    newTodos[selectTodoIndex] = newTodo;
    // setTodos(newTodos)
    setTodos('todo', newTodos)
    return newTodos
  }

  const addTodo = () => {
      setTodos((todos) => {
        const newTodos = [
          ...todos,
          {
            title : '제목을 입력해주세요🧚',
            content : '해야할 일을 기록해봐요💍'
          }
        ]
        setItem('todo', newTodos)
        return newTodos
      })
      setSelectTodoIndex(todos.length)
  }

  const delTodo = (index) => {
    setTodos((todos) => {
      const newTodos =[...todos];
      newTodos.splice(index, 1);
      setItem('todo',newTodos)
      return newTodos
    })
    if(index === selectTodoIndex){
      setSelectTodoIndex(0)
    }
  }

  return (
    <div className="App">
      <TodoTitleArea 
        todos = {todos} 
        setSelectTodoIndex = {setSelectTodoIndex}
        addTodo={addTodo}
        delTodo={delTodo} 
        selectTodoIndex={selectTodoIndex} />

      <TodoContainer 
        todo = {todos[selectTodoIndex]} 
        setTodo={setTodo} />

    </div>
  );  
}

export default App;
