// https://www.npmjs.com/package/react-open-weather-widget
import './App.css';
import 'react-open-weather-widget/lib/css/ReactWeather.css'
import OpenWeather from 'react-open-weather-widget'
import { useState } from 'react';
import AreaSearch from './component/AreaSearch';

function App() {
  const[areaInfo, setAreaInfo] = useState({
    lat:'37.566',
    lon:'126.977'
  })

  return (
    <div className="App">
      {/* 버튼 누르면 그 주소의 위도경도를 받아와야하므로 props로 받아온다 */}
      <AreaSearch setAreaInfo={setAreaInfo} areaInfo={areaInfo}/>     
      {areaInfo && <OpenWeather
        forecast="5days"
        apikey="315f0ba934c7194edfa87f918ad29774"
        type="geo"
        lat = {areaInfo.lat}
        lon = {areaInfo.lon}
        />}
    </div>
  );
}

export default App;
