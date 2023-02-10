// https://www.npmjs.com/package/react-open-weather-widget
import './App.css';
import 'react-open-weather-widget/lib/css/ReactWeather.css'
import OpenWeather from 'react-open-weather-widget'
import { useState } from 'react';

function App() {
  const[areaInfo, setAreaInfo] = useState({
    lat:'',
    lon:''
  })

  return (
    <div className="App">
      <OpenWeather
        forecast="5days"
        apikey="315f0ba934c7194edfa87f918ad29774"
        type="geo"
        city="Seoul"
        lat = {areaInfo.lat}
        lon = {areaInfo.lon}
        />
    </div>
  );
}

export default App;
