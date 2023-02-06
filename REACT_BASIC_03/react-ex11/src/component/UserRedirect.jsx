import React from 'react';
import Detail from './Detail';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Login from './Login';


const UserRedirect = () => {


    const userState = useSelector( (state) => (state.user.value));

    return (
        <div>
            { userState === true ? <Detail/> : <Navigate to = "/login" /> }
            
        </div>
    );
};

export default UserRedirect;