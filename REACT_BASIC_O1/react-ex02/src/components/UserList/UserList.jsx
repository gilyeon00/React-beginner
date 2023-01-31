import React from 'react';
import userData from './../../data/userData.json'

const UserList = () => {
    const users = userData;
    console.log(users)
    return (
        <div>
            <ul>
                {
                    users.map((user) => {
                        // {}쓰면 꼭 리턴해줘야하고, 한 줄로 할거면 ()로하고 return 안써도됨
                        // map으로 생성하면 고유값이 부재하기 때문에 key값으로 고유값 부여하기! <- index번호말고 pk로 하기
                        return (
                            <li key={user.id}>
                            <img src={user.picture} alt={user.name} />
                            <span>{user.username}</span>
                            <span>online</span>
                        </li>
                        )
                    })
                }

            </ul>
            
        </div>
    );
};

export default UserList;