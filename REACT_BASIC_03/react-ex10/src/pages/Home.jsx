import React from 'react';
import Sidebar from '../component/Sidebar';
import VideoList from '../component/VideoList';
import './home.css'

const Home = ({videoItems, selectVideoItem}) => {
    return (
        <div className='contents-wrap'>
            <div className='sidebar-box'>
                <Sidebar/>
            </div>
            <div className='video-list'>
                <VideoList 
                    videoItems = {videoItems}
                    selectVideoItem = {selectVideoItem}
                    display='list-v'
                />
            </div>
        </div>
    );
};

export default Home;