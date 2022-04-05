import React, { useState } from 'react';

import Button from './Button/Button';
import './TaskInput.css';

const TaskInput = props => {
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
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