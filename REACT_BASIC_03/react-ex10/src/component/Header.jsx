import React from 'react';
import {useRef} from "react";
import { useNavigate, Link} from 'react-router-dom';
import './Header.css'
const Header = ({search, clickLogo}) => {
    const inputRef = useRef();
    let navigate = useNavigate();

    const searchfnc = () => {
        const value = inputRef.current.value;
        search(value)
        navigate(`/search?search_query=${value}`)
    }

    const summitSearchBtn = () => {
        searchfnc();
    }

    const summitSearchEnter = (e) => {
        if(e.key === 'Enter'){
            searchfnc()
        }
    }

    return (
        <div className='header'>
            <div className='logoArea'>
                <h1> <Link to="/" onClick={clickLogo}/>YOUTUBE</h1>
                <div className='searchInputArea'>
                    <input
                        type = 'search'
                        placeholder='검색어를 입력하세요'
                        className='searchInput'
                        ref={inputRef}
                        onKeyDown={summitSearchEnter} />
                    <button 
                        className='searchBtn'
                        onClick={summitSearchBtn} > 
                        검색 </button>
                </div>
                <div className='topMenuArea'>
                    <button>알림</button>
                    <button>동영상 업로드</button>
                    <button>프로필</button>
                </div>
                
            
            </div>
        </div>
    );
};

export default Header;