import React, { useState } from 'react'

function User() {
    const [user, setUser] = useState({
        userName: "",
        age: ""
    })

    function changeUser(e) {
        setUser(prev => {
            return {
                [e.target.name]: e.target.value,
                ...prev,
            }
        })
    }

    function submitUser(e) {
        e.preventDefault();
        console.log(user)
    }

    return (
        <form onSubmit={submitUser}>
            <label htmlFor="userName">Username</label>
            <input type="text" onChange={changeUser} name="userName" value={user.userName} />
            <label htmlFor="age">Age(Years)</label>
            <input type="text" onChange={changeUser} name="age" value={user.age} />
            <button type='submit'>Add User</button>
            <p>{`${user.userName} (${user.age} years old)`}</p>
        </form>
    )
}

export default User;