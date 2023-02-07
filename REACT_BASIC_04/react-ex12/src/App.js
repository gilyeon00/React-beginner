import './App.css';
import ListItem from './component/ListItem';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getList, addList, deleteList, updateList} from './store/list/listSlice'

function App() {

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  
  // map으로 돌리기 위래 useSelector 사용
  const listData = useSelector((state) => state.list);

  // fullfill시, 렌더링이 되면 바로 getList함수가 실행(데이터 가져오기)할 수 있도록
  useEffect(()=>{
    dispatch(getList());
  },[])


  const onCreate = (e) => {
    e.preventDefault();
    if(inputValue){
      const newList = {content : inputValue}
      dispatch(addList(newList))
      setInputValue('')   // 입력후 input에 값이 없어지도록 
    }else{
        alert('새로운 목록의 내용을 입력해주세요')
    }
  }

  return (
    <div className="App">
      <form onSubmit={onCreate}>
      <h1>{listData.msg}</h1>
        <div>
          {listData.data.map( ele => (
            <ListItem key={ele.id} content={ele.content} id={ele.id}/>
          ))}
        </div>
        <input 
          type="text" 
          value={inputValue }
          onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">목록 추가</button>
      </form>
    </div>
  );
}

export default App;
