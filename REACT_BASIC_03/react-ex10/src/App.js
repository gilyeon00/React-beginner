import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Search from './pages/Search';
import Watch from './pages/Watch';
import Header from './component/Header';
import {videoURL, searchURL, channelURL} from './libs/api'
import {useEffect, useState} from 'react';

let defaultVideos = JSON.parse(sessionStorage.getItem('defaultVideos')) || null;
let selectedWatch = JSON.parse(sessionStorage.getItem('selectedWatch')) || null;

function App() {
  const [videoItems, setVideoItems] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  // 비디오데이터
  const videoData = async () => {
    const URL = videoURL;
    const response = await fetch(URL);
    const result = await response.json();
    setVideoItems(result.items)
    // console.log(result.items)
    defaultVideos = result.items
  }

  // 비디오는 한 번만 불러질 수 있도록 useEffect사용. useEffect안에서 videoData function을 바로 넣을 순 없다
  useEffect (()=> {
    videoData();
  }, [] )

  useEffect (() => {
    sessionStorage.setItem('defaultVideos', JSON.stringify(defaultVideos));
    sessionStorage.setItem('selectedWatch', JSON.stringify(selectedWatch));
  }, [selectVideo])

  //    다른 페이지에서 로고눌렀을 때 home으로 오는데, 30개 동영상 리스트는 session에서 가져올 수 있도록
  const clickLogo=() => {
    setVideoItems(defaultVideos);
  }

  const search = async (keyword) => {
    const URL = searchURL(keyword)
    const response = await fetch(URL);
    const result = await response.json();
    const resultCng= result.items.map(item=>({...item,id:item.id.videoId}))
    setVideoItems(resultCng);
    
    // 다른 방법
    // if(typeof result.item.id === 'string') {
    //   id = result.item.id;
    // }else(typeof result.item.id === 'object') {
    //   id = result.item.id.videoId;
    // }

  }

  const selectVideoItem = (video) => {
    setSelectVideo(video)
    selectedWatch=video;
    console.log(video)
  }

  return (    // videoItems가 있어야 실행되도록
    videoItems && <div className="App">
      <BrowserRouter>
      <Header search={search} clickLogo={clickLogo} />
        <Routes>
          <Route path="/" element={<Home videoItems={videoItems} search={search}  selectVideoItem={selectVideoItem} />} />
          <Route path="/search" element={<Search videoItems={videoItems} search={search} selectVideoItem={selectVideoItem} />} /> 
          <Route path="/watch" element={<Watch videoItems={videoItems} search={search} selectVideoItem={selectVideoItem} selectVideo={selectVideo} selectedWatch={selectedWatch} />}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
