import React, { useEffect, useState } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import MainHeader from '../MainHeader/MainHeader';
import AuthContext from '../Store/auth-context';

function LoginRoot() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedInfo = localStorage.getItem('isLoggedIn');
        if (storedInfo === '1') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        // if (email.isEmpty() || password.isEmpty()) {
        //     console.log("not valid")
        // }
        localStorage.setItem("isLoggedIn", "1")
        setIsLoggedIn(true)
    }
    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false)
    }


    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler
        }}>
            <MainHeader onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </AuthContext.Provider>)
}

export default LoginRoot