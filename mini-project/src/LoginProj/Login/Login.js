import React from 'react'
import Button from '../../GlobalUI/Button';

function Login() {
    return (
        <form>
            <label htmlFor="Email">Email</label>
            <input type="email" />
            <label htmlFor="Password">Password</label>
            <input type="Password" />
            <Button>Login</Button>
        </form>
    )
}

export default Login;