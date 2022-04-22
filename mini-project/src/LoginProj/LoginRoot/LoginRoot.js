import React, { useState } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import MainHeader from '../MainHeader/MainHeader';

function LoginRoot() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        if (email.isEmpty() || password.isEmpty()) {
            console.log("not valid")
        }
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        setIsLoggedIn(false)
    }


    return (<>
        <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
        <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
    </>)
}

export default LoginRoot