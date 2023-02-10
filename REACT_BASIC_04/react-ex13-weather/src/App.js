// https://www.npmjs.com/package/react-open-weather-widget
import './App.css';
import 'react-open-weather-widget/lib/css/ReactWeather.css'
import OpenWeather from 'react-open-weather-widget'
import { useState } from 'react';
import AreaSearch from './component/AreaSearch';

function App() {
  const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API;
  
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
        apikey = {OPEN_WEATHER_API_KEY}
        type="geo"
        lat = {areaInfo.lat}
        lon = {areaInfo.lon}
        />}
    </div>
  );
}

export default App;
