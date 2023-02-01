import './App.css';
import Banner from './component/Banner';
import CanSlider from './component/CanSlider';
import GlobalStyle from './component/GlobalStyle';

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Banner/>
        <CanSlider/>
    </div>
  );
}

export default App;
