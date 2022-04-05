import React from 'react';

import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = props => {
    return (
        <ul className="goal-list">
            {props.items.map(goal => (
                <TaskItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </TaskItem>
            ))}
        </ul>
    );
};

export default TaskList;

// import React from 'react'

// function TaskList(props) {
//     return (
//         props.tasks.map(item => {
//             return (<ul>
//                 <li >{item.task}</li>
//             </ul>)
//         })
//     )
// }

// export default TaskList;