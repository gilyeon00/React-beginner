import React from 'react';
import userData from './../../data/userData.json'
import './userList.css'

const UserList = () => {
    const users = userData;
    console.log(users)
    return (
        <div>
            <ul className='user-lists'>
                {
                    users.map((user) => {
                        // {}쓰면 꼭 리턴해줘야하고, 한 줄로 할거면 ()로하고 return 안써도됨
                        // map으로 생성하면 고유값이 부재하기 때문에 key값으로 고유값 부여하기! <- index번호말고 pk로 하기
                        return (
                            <li key={user.id} className='user-list'>
                            <img src={user.picture} alt={user.name} />
                            <span className='user-name'>{user.username}</span>
                            {/* { user.online ? <span className='online on'>online</span> : <span className='online off'>online</span>} 색이 다르게 표현*/}
                            {user.online && <span className='online on'>online</span> } {/* on만 online이 나올 수 있도록 */}
                        </li>
                        )
                    })
                }

            </ul>
            
        </div>
    );
};

export default UserList;