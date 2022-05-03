import React, { useContext, useEffect, useState } from 'react'
import Home from '../Home/Home'
import Login from '../Login/Login'
import MainHeader from '../MainHeader/MainHeader';
import AuthContext from '../Store/auth-context';

function LoginRoot() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {
    //     const storedInfo = localStorage.getItem('isLoggedIn');
    //     if (storedInfo === '1') {
    //         setIsLoggedIn(true)
    //     }
    // }, [])

    // const loginHandler = (email, password) => {
    //     // if (email.isEmpty() || password.isEmpty()) {
    //     //     console.log("not valid")
    //     // }
    //     localStorage.setItem("isLoggedIn", "1")
    //     setIsLoggedIn(true)
    // }
    // const logoutHandler = () => {
    //     localStorage.removeItem('isLoggedIn');
    //     setIsLoggedIn(false)
    // }
    const ctx = useContext(AuthContext);
    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login />}
                {ctx.isLoggedIn && <Home />}
            </main>
        </React.Fragment>)
}

export default LoginRoot