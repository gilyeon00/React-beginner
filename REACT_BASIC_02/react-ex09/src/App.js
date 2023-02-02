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

  return (
    <div className="App">

      <TodoTitleArea todos = {todos}/>
      <TodoContainer/>

    </div>
  );
}

export default App;
