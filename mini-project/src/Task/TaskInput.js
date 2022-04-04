import React, { useState } from 'react'

function TaskInput(props) {
    const [enteredValue, setEnteredValue] = useState('')

    function changeHandler(e) {
        setEnteredValue(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onAddValue(enteredValue)
    }

    return (
        <form onSubmit={submitHandler}>
            <label>Tasks</label>
            <input type="text" onChange={changeHandler} value={enteredValue} />
            <button type='submit' >Add Task</button>

        </form>
    )

}

export default TaskInput