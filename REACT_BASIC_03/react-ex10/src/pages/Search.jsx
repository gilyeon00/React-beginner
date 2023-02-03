import React from 'react';
import Sidebar from '../component/Sidebar';
import VideoList from '../component/VideoList';
import {videoURL, searchURL, channelURL} from './../libs/api'

const Search = ({videoItems, selectVideoItem}) => {
    return (
        <div className='contents-wrap'>
            <div className='sidebar-box'>
                <Sidebar />
            </div>
            <div className='video-list'>
                <VideoList 
                    selectVideoItem = {selectVideoItem}
                    videoItems = {videoItems}
                    display='list-v'/>
            </div>
        </div>
    );
};

export default Search;