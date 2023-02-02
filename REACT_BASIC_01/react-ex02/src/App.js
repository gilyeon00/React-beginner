import './App.css';
import MovieList from './components/MovieList/MovieList';
import CinemaBanner from './components/MovieList/CinemaBanner';
// import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      {/* <UserList/> */}
      <CinemaBanner/>
      <MovieList/>
    </div>
  );
}

export default App;
