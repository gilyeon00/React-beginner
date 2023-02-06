import React from 'react';
import './login.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/userSlice';

const Login = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        dispatch(login(true));
        navigator('/')      //   함수로 쓸때는 Link를 못쓰니 navigator사용
    }

    return (
        <div className='login-container'>
            <form onSubmit={(e)=> {loginUser(e)}} >
                <div className='userID'>
                    <div><label htmlFor='userID'>아이디</label></div>
                    <div><input type="text" id="userID" placeholder="아이디 입력"></input></div>
                </div>
                <div className='userPWD'>
                    <div><label htmlFor='userPWD'>아이디</label></div>
                    <div><input type="text" id="userPWD" placeholder="비밀번호 입력"></input></div>
                </div>
                <div className='login-btn'>
                    <input type="submit" value="login"></input>
                </div>
            </form>
            
        </div>
    );
};

export default Login;