import React, { useEffect, useState } from 'react'

import Button from '../../GlobalUI/Button';
import Card from '../../GlobalUI/Card';
import classes from './Login.module.css'

function Login(props) {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log('effect called for validity')
            setFormIsValid(
                enteredEmail.includes('@') && enteredPassword.trim().length > 6
            )
        }, 500)

        return () => {
            console.log("Clean Up")
            clearTimeout(identifier)
        }

    }, [enteredEmail, enteredPassword])

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setEnteredPassword(e.target.value);
    }

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    }

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin(enteredEmail, enteredPassword)
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input type="email"
                        name="emaili"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login;