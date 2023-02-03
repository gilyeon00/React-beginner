import React from 'react';
import VideoWatch from '../component/VideoWatch';
import VideoList from '../component/VideoList';

const Watch = ({selectVideoItem, videoItems, selectedWatch}) => {
    return (
        <div className='watch-content'>
            <div className='view'>
                <VideoWatch selectedWatch={selectedWatch}/>
           </div> 
            <div className='list'>
                <VideoList 
                videoItems={videoItems}
                selectVideoItem={selectVideoItem} 
                />
            </div> 
        </div>
    );
};

export default Watch;