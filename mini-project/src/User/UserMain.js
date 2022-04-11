import React, { useState } from 'react'
import User from './User';
import UserList from './UserList';

function UserMain() {
    const [usersList, setUsersList] = useState([])

    function addUserHandler(user) {
        setUsersList(prev => {
            return [...prev, { name: user.userName, age: user.age, id: user.id }]
        })
    }

    return (
        <>
            <User onAddUser={addUserHandler} />
            <UserList users={usersList} />
        </>
    )
}

export default UserMain;