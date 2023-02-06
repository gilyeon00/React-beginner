import React from 'react';
import './login.css'

const Login = () => {
    return (
        <div className='login-container'>
            <form>
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