import React from 'react';
import userData from './../../data/userData.json'

const UserList = () => {
    const users = userData;
    console.log(users)
    return (
        <div>
            <li>
                <img src="" alt=""/>
                <span>{users[0].username}</span>
                <span>online</span>
            </li>
        </div>
    );
};

export default UserList;