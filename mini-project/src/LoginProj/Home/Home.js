import React, { useContext } from 'react'
import Button from '../../GlobalUI/Button';
import Card from '../../GlobalUI/Card'
import AuthContext from '../Store/auth-context';

function Home() {
    const authCtx = useContext(AuthContext);
    return (<Card>
        <h1>Welcome back mate!</h1>
        <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>)
}

export default Home