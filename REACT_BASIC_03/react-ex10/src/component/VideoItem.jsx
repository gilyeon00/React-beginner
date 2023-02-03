import React from 'react';
import './videoItem.css'
import { Link } from 'react-router-dom';

const VideoItem = ({videoItem, selectVideoItem, display}) => {
    return (
        <li className={`videoItem ${display}`}>
            <Link to="/watch">
            <div className='item' onClick={selectVideoItem(videoItem)}>
                <div className='thumnail'>
                    <img src={videoItem.snippet.thumbnails.medium.url} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg'>
                        <img src ={videoItem.snippet.thumbnails.default.url} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText'>
                        <p className='title'> {videoItem.snippet.title}</p>
                        <p className='channel'> {videoItem.snippet.channelTitle}</p>
                        <p className='publishDate'> {videoItem.snippet.publihedAt}</p>
                    </div>
                </div>
            </div>
            </Link>
        </li>
    );
};

export default VideoItem;