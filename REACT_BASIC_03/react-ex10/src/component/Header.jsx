import React from 'react';
import {useRef} from "react";
import { useNavigate, Link} from 'react-router-dom';
import { BiBell } from 'react-icons/bi'
import { BiVideoPlus } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import './header.css'

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
                <h1><Link to="/" onClick={clickLogo}>📹YOUTUBE</Link></h1>
            </div>
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
                <BiVideoPlus className='topIcon' size='1.8rem'>동영상 업로드</BiVideoPlus>
                <BiBell className='topIcon'size='1.8rem'>알림</BiBell>
                <CgProfile className='topIcon'size='1.8rem'>프로필</CgProfile>
            </div>
        </div>

    );
};

export default Header;