import './App.css';
import ListItem from './component/ListItem';

function App() {
  return (
    <div className="App">
      <form>
        <h1>글 목록</h1>
        <div>
          <ListItem/>
        </div>
        <input type="text" value=""/>
        <button type="submit">목록 추가</button>
      </form>
    </div>
  );
}

export default App;
