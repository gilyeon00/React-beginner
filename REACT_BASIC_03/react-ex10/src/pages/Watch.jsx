import React from 'react';
import VideoWatch from '../component/VideoWatch';
import VideoList from '../component/VideoList';

const Watch = () => {
    return (
        <div className='watch-content'>
            <div className='view'>
                <VideoWatch />
           </div> 
            <div className='list'>
                <VideoList />
            </div> 
        </div>
    );
};

export default Watch;