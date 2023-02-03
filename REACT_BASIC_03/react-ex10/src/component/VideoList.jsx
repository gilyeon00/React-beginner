import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css' 

const VideoList = ({videoItems, selectVideoItem}) => {
    return (
        <ul className='videoList'>
            {
                videoItems && videoItems.map(videoItem => (
                    <VideoItem 
                        videoItem={videoItem}
                        key={VideoItem.id} 
                        selectVideoItem={selectVideoItem}   />
                ))
            }
        </ul>
    );
};

export default VideoList;