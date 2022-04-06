import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button/Button';
import './TaskInput.css';

const FormControl = styled.div`
    margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.inValid ? "red" : "black"}
  }
  
  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    border-color: ${props => props.inValid ? "red" : "black"};
    background-color: ${props => props.inValid ? "rgb(225, 150, 150)" : "transparent"}
  }
  
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input{
    border-color: red;
    background-color: rgb(225, 150, 150);
  }
`

const TaskInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true)
        }
        setEnteredValue(event.target.value);

    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false)
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('')
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl inValid={!isValid}>
                <label>Task List</label>
                <input type="text" onChange={goalInputChangeHandler}
                    name="task" value={enteredValue} placeholder="Enter the task" />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default TaskInput;


// import React, { useState } from 'react'

// function TaskInput(props) {
//     const [enteredValue, setEnteredValue] = useState('')

//     function changeHandler(e) {
//         setEnteredValue(e.target.value)
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         props.onAddValue(enteredValue)
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <label>Tasks</label>
//             <input type="text" onChange={changeHandler} value={enteredValue} />
//             <button type='submit' >Add Task</button>

//         </form>
//     )

// }

// export default TaskInput