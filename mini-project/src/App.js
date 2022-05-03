import React from 'react'
import LoginRoot from './LoginProj/LoginRoot/LoginRoot';
import { AuthContextProvider } from './LoginProj/Store/auth-context';
import Task from './Task/Task';
import User from './User/User';
import UserMain from './User/UserMain';

function App() {
    return (
        <div>
            {/* <Task /> */}
            {/* <UserMain /> */}
            <AuthContextProvider>
                <LoginRoot />
            </AuthContextProvider>
        </div>
    )
}

export default App;