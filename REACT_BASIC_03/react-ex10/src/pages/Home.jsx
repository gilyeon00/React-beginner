import React from 'react';
import Sidebar from '../component/Sidebar';
import VideoList from '../component/VideoList';

const Home = ({videoItems, selectVideoItem}) => {
    return (
        <div className='contents-wrap'>
            <div>
                <Sidebar/>
            </div>
            <div className='video-list'>
                <VideoList 
                    videoItems = {videoItems}
                    selectVideoItem = {selectVideoItem}
                />
            </div>
        </div>
    );
};

export default Home;