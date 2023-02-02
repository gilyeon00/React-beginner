import './App.css';
import { useState} from 'react'
import TodoTitleArea from './component/TodoTitleArea';
import TodoContainer from './component/TodoContainer';

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'title1',
      contents: '오늘은 목요일!'
    },{
      title: 'title2',
      contents: '내일은 금요일!'
    }

  ]);

  const [selectTodoIndex, setSelectTodoIndex] = useState(0);

  const setTodo = (newTodo) => {
    const newTodos = [...todos];    // 새로운 래퍼런스로 
    newTodos[selectTodoIndex] = newTodo;
    setTodos(newTodos)
  }

  const addTodo = () => {
      setTodos([
        ...todos,
        {
          title : '제목을 입력해주세요🧚',
          content : '해야할 일을 기록해봐요💍'
        }
      ])
  }

  const delTodo = () => {
    setTodos([
      ...todos,
      {

      }
    ])
  }

  return (
    <div className="App">
      <TodoTitleArea 
        todos = {todos} 
        setSelectTodoIndex = {setSelectTodoIndex}
        addTodo={addTodo}
        delTodo={delTodo} />
      <TodoContainer 
        todo = {todos[selectTodoIndex]} 
        setTodo={setTodo} />

    </div>
  );  
}

export default App;
