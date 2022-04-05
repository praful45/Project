import React, { useState } from 'react';

import TaskList from './TaskList';
import TaskInput from './TaskInput';
import './Task.css';

const Task = () => {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
    ]);

    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
            return updatedGoals;
        });
    };

    const deleteItemHandler = goalId => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    let content = (
        <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <TaskList items={courseGoals} onDeleteItem={deleteItemHandler} />
        );
    }

    return (
        <div>
            <section id="goal-form">
                <TaskInput onAddGoal={addGoalHandler} />
            </section>
            <section id="goals">
                {content}
                {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
            </section>
        </div>
    );
};

export default Task;


// import React, { useState } from 'react'
// import TaskInput from './TaskInput'
// import TaskList from './TaskList'

// function Task() {

//     let mesg = ''

//     const [listTask, setListTask] = useState([
//         { task: "do workout", id: "t1" },
//         { task: "buy books", id: "t2" }
//     ])

//     if (listTask.length === 0) {
//         mesg = <p>NO tasks availabel. try adding</p>
//     }
//     else {
//         mesg = <TaskList tasks={listTask} />
//     }

//     function onAddValue(task) {
//         setListTask(tsk => {
//             const id = Math.floor(Math.random() * 100)
//             return [...tsk, { task, id: id }]
//         })
//     }

//     return <div>
//         <TaskInput onAddValue={onAddValue} />
//         {mesg}
//     </div>
// }

// export default Task;