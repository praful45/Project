import React from 'react'

function TaskList(props) {
    return (
        props.tasks.map(item => {
            return (<ul>
                <li >{item.task}</li>
            </ul>)
        })
    )
}

export default TaskList;