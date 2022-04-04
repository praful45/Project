import React, { useState } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'

function Task() {

    let mesg = ''

    const [listTask, setListTask] = useState([
        { task: "do workout", id: "t1" },
        { task: "buy books", id: "t2" }
    ])

    if (listTask.length === 0) {
        mesg = <p>NO tasks availabel. try adding</p>
    }
    else {
        mesg = <TaskList tasks={listTask} />
    }

    function onAddValue(task) {
        setListTask(tsk => {
            const id = Math.floor(Math.random() * 100)
            return [...tsk, { task, id: id }]
        })
    }

    return <div>
        <TaskInput onAddValue={onAddValue} />
        {mesg}
    </div>
}

export default Task;