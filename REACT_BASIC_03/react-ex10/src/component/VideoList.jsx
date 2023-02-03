import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css' 

const VideoList = ({videoItems}) => {
    return (
        <ul className='videoList'>
            {
                videoItems.map(videoItem => (
                    <VideoItem 
                        videoItem={videoItem}
                        key={VideoItem.id}    />
                ))
            }
        </ul>
    );
};

export default VideoList;