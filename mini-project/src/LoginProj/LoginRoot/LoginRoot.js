import React, { useState } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import MainHeader from '../MainHeader/MainHeader';

function LoginRoot() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (email, password) => {
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        setIsLoggedIn(false)
    }


    return (<>
        <MainHeader />
        <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
    </>)
}

export default LoginRoot