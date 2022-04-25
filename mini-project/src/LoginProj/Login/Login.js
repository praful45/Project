import React, { useEffect, useReducer, useState } from 'react'

import Button from '../../GlobalUI/Button';
import Card from '../../GlobalUI/Card';
import classes from './Login.module.css'

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.includes('@') }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.includes('@') }
    }
    return { value: '', isValid: false };
}
const passwordReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.val, isValid: action.val.trim().length > 6 }
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: state.value, isValid: state.value.trim().length > 6 }
    }
    return { value: '', isValid: false };
}

function Login(props) {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    // useEffect(() => {
    //     const identifier = setTimeout(() => {
    //         console.log('effect called for validity')
    //         setFormIsValid(
    //             enteredEmail.includes('@') && enteredPassword.trim().length > 6
    //         )
    //     }, 500)

    //     return () => {
    //         console.log("Clean Up")
    //         clearTimeout(identifier)
    //     }

    // }, [enteredEmail, enteredPassword])

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: false,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: false,
    });

    const emailChangeHandler = (e) => {
        dispatchEmail({ type: 'USER_INPUT', val: e.target.value });

        setFormIsValid(
            emailState.value.includes('@') && passwordState.value.trim().length > 6
        )
    }

    const passwordChangeHandler = (e) => {
        dispatchPassword({ type: 'USER_INPUT', val: e.target.value });

        setFormIsValid(
            emailState.value.includes('@') && passwordState.value.trim().length > 6
        )
    }

    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR', })
    }

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6)
        dispatchPassword({ type: 'INPUT_BLUR' })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onLogin(emailState.value, passwordState.value)
    }

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input type="email"
                        name="emaili"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
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