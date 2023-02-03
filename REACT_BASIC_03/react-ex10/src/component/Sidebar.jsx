import React from 'react';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <button>홈</button>
            <button>Shorts</button>
            <button>구독</button>
            <button>Originals</button>
        </div>
    );
};

export default Sidebar;