import React from 'react';
import Sidebar from '../component/Sidebar';
import VideoList from '../component/VideoList';
import {videoURL, searchURL, channelURL} from './../libs/api'

const Search = () => {
    return (
        <div className='contents-wrap'>
            <div>
                <Sidebar />
            </div>
            <div className='video-list'>
                <VideoList />
            </div>
        </div>
    );
};

export default Search;