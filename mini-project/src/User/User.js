import React, { useState } from 'react'
import Card from './UI/Card'
import styles from './User.module.css'
import Button from './UI/Button'

function User(props) {
    const [user, setUser] = useState({
        id: "",
        userName: "",
        age: ""
    })

    function changeUser(e) {
        setUser(prev => {
            return {
                ...prev,
                id: Math.floor(Math.random() * 100),
                [e.target.name]: e.target.value,
            }
        })
    }

    function submitUser(e) {
        e.preventDefault();
        if (user.age.trim().length === 0 || user.userName.trim().length === 0) {
            console.log("length validation occured")
            return;
        }
        if (+user.age < 1) {
            console.log("less than 1 validation occured")
            return;
        }
        props.onAddUser(user)
        setUser({
            userName: "",
            age: ""
        })
    }

    return (
        <Card className={styles.input}>
            <form onSubmit={submitUser}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={changeUser} name="userName" value={user.userName} />
                <label htmlFor="age">Age(Years)</label>
                <input id="age" type="number" onChange={changeUser} name="age" value={user.age} />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}

export default User;