import React from 'react';
import VideoItem from './VideoItem';
import './videoList.css' 

const VideoList = ({videoItems, selectVideoItem, display}) => {
    return (
        <ul className='videoList'>
            {
                videoItems && videoItems.map(videoItem => (
                    <VideoItem 
                        videoItem={videoItem}
                        key={VideoItem.id} 
                        selectVideoItem={selectVideoItem}
                        display = {display}  />
                ))
            }
        </ul>
    );
};

export default VideoList;