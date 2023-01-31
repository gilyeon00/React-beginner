import './App.css';
import UserList from './component/UserList/UserList'
import NewsList from './component/NewsList/NewsList'

import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);    // 첫번째 요소: 현재 상태값, 두번째 요소: setter함수(변화시켜주는 함수)
  const [name, setName] = useState('길연');
  const [isOn, setIsOn] = useState(false);

  const plus = () => {
    setNum(number => number + 1)      // 기존값과 현재값을 비교하면서 업데이트해야하기때문에 num = num +1 안됨
  }
  const minus = () => {
    setNum(number => number - 1)
  }

  const changeName = () => {
    setName(name === '길연' ? '연길' : '길연')
  }

  const showUserList = () => {
    setIsOn(isOn => !isOn)
  }

  return (
    <div className="App">
      <div className='count-box'>
        <h2>{num}</h2>
        <button onClick={plus}>+1</button>
        <button onClick={minus}>-1</button>
      </div>
      <div className='name-box'>
        <h2>{name}</h2>
        <button onClick={changeName}>눌러봐</button>
      </div>

      <button onClick={showUserList}>사용자 목록</button>
      <div className={isOn? `userList-box on`: `userList-box off`}>
        <UserList/>
      </div>
      <NewsList/>
    </div>
  );
}

export default App;