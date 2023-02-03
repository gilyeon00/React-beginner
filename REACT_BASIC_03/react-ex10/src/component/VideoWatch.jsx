import React from 'react';

const VideoWatch = () => {
    return (
        <div className='watchBox'>
            <div className='playVideoBox'>
                {/* <iframe className='videoframe' type="text/html" 
                src={`http:www.youtube.c?om/embed/${}`} /> */}

            </div>
            <div>
                <h2>비디오 타이틀</h2>
                <h3>채널 타이틀</h3>
                <p>비디오 타이틀</p>
            </div>            
        </div>
    );
};

export default VideoWatch;