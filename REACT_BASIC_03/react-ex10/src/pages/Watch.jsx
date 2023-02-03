import React from 'react';
import VideoWatch from '../component/VideoWatch';
import VideoList from '../component/VideoList';
import './watch.css'

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
                display="list-h"
                />
            </div> 
        </div>
    );
};

export default Watch;